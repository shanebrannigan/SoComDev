ALTER TABLE lit_events.event_registration DROP CONSTRAINT IF EXISTS "event_registration_fk0";

ALTER TABLE lit_events.event_registration DROP CONSTRAINT IF EXISTS "event_registration_fk1";

ALTER TABLE lit_events.event_registration DROP CONSTRAINT IF EXISTS "event_registration_fk2";

ALTER TABLE lit_events.survey_answers DROP CONSTRAINT IF EXISTS "survey_answers_fk0";

ALTER TABLE lit_events.survey DROP CONSTRAINT IF EXISTS "survey_fk0";

ALTER TABLE lit_events.survey DROP CONSTRAINT IF EXISTS "survey_fk1";

DROP TABLE IF EXISTS lit_events.event_registration;

DROP TABLE IF EXISTS lit_events.guest;

DROP TABLE IF EXISTS lit_events.employee;

DROP TABLE IF EXISTS lit_events.survey_answers;

DROP TABLE IF EXISTS lit_events.survey_questions;

DROP TABLE IF EXISTS lit_events.survey;

DROP SCHEMA IF EXISTS lit_events;
