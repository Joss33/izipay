import { Injectable } from '@angular/core';
import { catchError, Observable, repeat, Subject, takeUntil, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from "@angular/common/http";

import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '@shared/components/alert/alert.component';
import { FormArray, FormControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private loading = new Subject<boolean>();
  loading$ = this.loading.asObservable();

  private sideNav = new Subject<boolean>();
  sideNav$ = this.sideNav.asObservable();

   // Observable para cancelar todas las peticiones pendientes
  private ngUnsubscribe = new Subject<void>();
  ngUnsubscribe$ = this.ngUnsubscribe.asObservable();

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
  ) {
  }

  cancelAllHttpRequest() {
    this.ngUnsubscribe.next();
  }

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  setLoading(show: boolean) {
    this.loading.next(show);
  }

  getSideNav(): Observable<boolean> {
    return this.sideNav.asObservable();
  }

  setSideNav(show: boolean) {
    this.sideNav.next(show);
  }

  post(url: string, dto: any, alert = true) {
    return this.http.post(url, dto)
      .pipe(takeUntil(this.ngUnsubscribe),
        catchError((error: HttpErrorResponse) => {
          console.log(error.status);
          
          let message = error.error.data || error.error.data?.length > 0 ? error.error.data : error.error.description;
          this.setLoading(false);
          if (error.status === HttpStatusCode.Conflict) {
            if (alert) {
              this.showMessage('Something is wrong on the server', message);
            }
            return throwError( ()=> 'Something is wrong on the server');
          }
          if (error.status === HttpStatusCode.NotFound) {
            if (alert) {
              this.showMessage('No data found.', message);
            }
            return throwError( ()=> 'No data found.');
          }
          if (error.status === HttpStatusCode.Unauthorized) {
            if (alert) {
              this.showMessage('Your session has expired.', message);
            }
            return throwError( ()=> 'Your session has expired.');
          }
          if (error.status === HttpStatusCode.BadRequest) {
            if (alert) {
              this.showMessage('A problem occurred in the request.', message);
            }
            return throwError( ()=> 'A problem occurred in the request.');
          }
          if (error.status === HttpStatusCode.Forbidden) {
            if (alert) {
              this.showMessage('You do not have permissions to perform this action.', message);
            }
            return throwError( ()=> 'You do not have permissions to perform this action.');
          }
          if (alert) {
            this.showMessage('Oops something went wrong', message);
          }
          return throwError( ()=> 'Oops something went wrong');
        })
      )
  }

  get(url: string, params?: any, alert = true) {
    return this.http.get(url, { params: params })
      .pipe(takeUntil(this.ngUnsubscribe),
        catchError((error: HttpErrorResponse) => {
          console.log(error.status);
          let message = error.error.data || error.error.data?.length > 0? error.error.data : error.error.description;
          this.setLoading(false);
          console.log(error.status);
          if (error.status === HttpStatusCode.Conflict) {
            if (alert) {
              this.showMessage('Something is wrong on the server', message);
            }
            return throwError( ()=> 'Something is wrong on the server');
          }
          if (error.status === HttpStatusCode.NotFound) {
            if (alert) {
              this.showMessage('No data found.', message);
            }
            return throwError( ()=> 'No data found.');
          }
          if (error.status === HttpStatusCode.Unauthorized) {
            if (alert) {
              this.showMessage('Your session has expired.', message);
            }
            return throwError( ()=> 'Your session has expired.');
          }
          if (error.status === HttpStatusCode.BadRequest) {
            if (alert) {
              this.showMessage('A problem occurred in the request.', message);
            }
            return throwError( ()=> 'A problem occurred in the request.');
          }
          if (error.status === HttpStatusCode.Forbidden) {
            if (alert) {
              this.showMessage('You do not have permissions to perform this action.', message);
            }
            return throwError( ()=> 'You do not have permissions to perform this action.');
          }
          if (error.status === HttpStatusCode.PreconditionFailed) {
            if (alert) {
              this.showMessage('Missing or invalid params, check the documentation of the API.', message);
            }
            return throwError( ()=> 'Missing or invalid params, check the documentation of the API.');
          }
          if (alert) {
            this.showMessage('Oops something went wrong', message);
          }
          return throwError( ()=> 'Oops something went wrong');
        },),
      )
  }

  showMessage(title: string, message: string, callback = () => { }) { 
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(
      AlertComponent,
      {
        data: {
          title: title,
          html: `<p class="text-center text-01">${message}</p>`,
          icon: 'fa-thin fa-triangle-exclamation',
          buttonText: 'Close',
        },
        width: '100%',
        maxWidth: '24rem',
      }
    );
    dialogRef.afterClosed().subscribe(res => {
      callback();
    });
  }

  formTouched(form: any) {
		form.markAllAsTouched();
		for (const key in form.controls) {
			form.get(key).markAsDirty();
		}
	}

	cleanForm(form: any): void {
		for (let key in form.value) {
			if (form.get(key)?.value != '' && form.get(key)?.value != null && typeof (form.get(key)?.value) == 'string') {
				form.get(key)?.setValue(form.get(key)?.value.trim());
			}
		}
	}

  markArrayDirty(formArray: FormArray) {
		formArray.controls.forEach((control: any) => {
			if(!!control.controls) {
				if(Array.isArray(control.controls)) {
					control.markAsDirty();
					this.markArrayDirty(control as FormArray);
				} else {
					this.markGroupDirty(control as FormGroup);
				}
			} else {
				this.markControlDirty(control as FormControl);
			}
		});
	}

	markControlDirty(formControl: FormControl) {
		formControl.markAsDirty();
	}

	markDirty(form: FormGroup) {
		this.markGroupDirty(form);
	}

	markGroupDirty(formGroup: FormGroup) {
		Object.keys(formGroup.controls).forEach(key => {
			const control: any = formGroup.get(key);
			console.log(control.controls);
			if(!!control.controls) {
				if(Array.isArray(control.controls)) {
					formGroup.get(key)?.markAsDirty();
					this.markArrayDirty(formGroup.get(key) as FormArray);
				} else {
					this.markGroupDirty(formGroup.get(key) as FormGroup);
				}
			} else {
				this.markControlDirty(formGroup.get(key) as FormControl);
			}	
		});
	}

}
