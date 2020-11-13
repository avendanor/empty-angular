import { OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

/**
 * A class that automatically unsubscribe all observables when the object gets destroyed
 */
export class UnsubscribeOnDestroyAdapter implements OnDestroy {
  /**
   * The subscription sink object that stores all subscriptions
   */
  subs = new SubSink();

  /**
   * The lifecycle hook that unsubscribe all subscriptions when the component / object gets destroyed
   */
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
