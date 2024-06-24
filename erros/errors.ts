export type Success<T> = { status: 'success'; value: T };
export type Warning<T> = { status: 'warning'; value: T; warning: string; };
export type Failure = { status: 'failure'; error: string };