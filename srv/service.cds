using { cicd as my } from '../db/schema.cds';

@path : '/service/cicdService'
service cicdService
{
    @odata.draft.enabled
    entity test as
        projection on my.test;
}

annotate cicdService with @requires :
[
    'authenticated-user'
];
