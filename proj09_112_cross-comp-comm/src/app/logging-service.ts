import { Component, OnInit } from '@angular/core';

// We need to centralize the code
export class LoggingService {
    logStatusChange (status: string) {
        console.log ('loggingService => logStatusChange(): status ' + status)
    }
}