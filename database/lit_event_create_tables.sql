CREATE SCHEMA lit_events;

CREATE TABLE lit_events.event_registration (
	"row_id" serial NOT NULL,
	"event_id" bigint NOT NULL,
	"employee_id" varchar(8) NOT NULL,
	"guest_id" bigint,
	"survey_id" bigint NOT NULL,
	"guest_fee_paid" BOOLEAN,
	"socom_member" BOOLEAN,
	"contractor" BOOLEAN,
	"created_on" TIMESTAMP NOT NULL DEFAULT NOW(),
	CONSTRAINT event_registration_pk PRIMARY KEY ("row_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE lit_events.guest (
	"guest_id" serial NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"created_on" TIMESTAMP NOT NULL DEFAULT NOW(),
	CONSTRAINT guest_pk PRIMARY KEY ("guest_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE lit_events.employee (
	"employee_id" varchar(8) NOT NULL,
	"email" varchar NOT NULL,
	"created_on" TIMESTAMP NOT NULL DEFAULT NOW(),
	CONSTRAINT employee_pk PRIMARY KEY ("employee_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE lit_events.survey_answers (
	"answer_id" serial NOT NULL,
	"question_id" bigint NOT NULL,
    "survey_id" bigint NOT NULL,
	"answer" varchar NOT NULL,
	"created_on" TIMESTAMP NOT NULL DEFAULT NOW(),
	CONSTRAINT survey_answers_pk PRIMARY KEY ("answer_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE lit_events.survey_questions (
	"question_id" serial NOT NULL,
    "survey_id" bigint NOT NULL,
	"question" varchar NOT NULL,
	"created_on" TIMESTAMP NOT NULL DEFAULT NOW(),
	CONSTRAINT survey_questions_pk PRIMARY KEY ("question_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE lit_events.survey (
	"survey_id" serial NOT NULL,
	"survey_type" varchar NOT NULL,
	"closing_on" TIMESTAMP NOT NULL,
	"created_on" TIMESTAMP NOT NULL DEFAULT NOW(),
	CONSTRAINT survey_pk PRIMARY KEY ("survey_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE lit_events.event_registration ADD CONSTRAINT "event_registration_fk0" FOREIGN KEY ("employee_id") REFERENCES lit_events.employee("employee_id");
ALTER TABLE lit_events.event_registration ADD CONSTRAINT "event_registration_fk1" FOREIGN KEY ("guest_id") REFERENCES lit_events.guest("guest_id");
ALTER TABLE lit_events.event_registration ADD CONSTRAINT "event_registration_fk2" FOREIGN KEY ("survey_id") REFERENCES lit_events.survey("survey_id");

ALTER TABLE lit_events.survey_answers ADD CONSTRAINT "survey_answers_fk0" FOREIGN KEY ("question_id") REFERENCES lit_events.survey_questions("question_id");
ALTER TABLE lit_events.survey_answers ADD CONSTRAINT "survey_answers_fk1" FOREIGN KEY ("survey_id") REFERENCES lit_events.survey("survey_id");

ALTER TABLE lit_events.survey_questions ADD CONSTRAINT "survey_questions_fk0" FOREIGN KEY ("survey_id") REFERENCES lit_events.survey("survey_id");