INSERT INTO lit_events.employee (employee_id, email) VALUES
  ('n0123456', 'studyabr@insurance.com'),
  ('n0123457', 'janusfury@insurance.com'),
  ('n0123458', 'offthelip@insurance.com'),
  ('n0123459', 'markjugg@insurance.com'),
  ('n0123410', 'donev@insurance.com'),
  ('n0123411', 'iapetus@insurance.com'),
  ('n0123412', 'overbom@insurance.com'),
  ('n0123413', 'tsuruta@insurance.com'),
  ('n0123414', 'ylchang@insurance.com'),
  ('n0123415', 'studyabr@insurance.com');

INSERT INTO lit_events.guest (first_name, last_name) VALUES
  ('Thomas', 'Smith'),
  ('Ann', 'Robinson'),
  ('Theresa', 'May'),
  ('Davina', 'McCall'),
  ('Mel', 'Gibson'),
  ('Katy', 'Perry'),
  ('Halle', 'Berry'),
  ('Anne', 'Hathaway'),
  ('Sean', 'Combs'),
  ('Bobby', 'Drop Table');

INSERT INTO lit_events.survey (survey_type, closing_on) VALUES
  ('SoCom', NOW() + INTERVAL '1 WEEK'),
  ('SoCom', NOW() + INTERVAL '1 WEEK'),
  ('SoCom', NOW() + INTERVAL '1 WEEK'),
  ('SoCom', NOW() + INTERVAL '1 WEEK'),
  ('SoCom', NOW() + INTERVAL '1 WEEK'),
  ('Tech Office', NOW() + INTERVAL '1 WEEK'),
  ('Tech Office', NOW() + INTERVAL '1 WEEK'),
  ('Tech Office', NOW() + INTERVAL '1 WEEK'),
  ('Tech Office', NOW() + INTERVAL '1 WEEK'),
  ('Tech Office', NOW() + INTERVAL '1 WEEK');

INSERT INTO lit_events.survey_questions (survey_id, question) VALUES
  (1, 'What do you want for starters?'),
  (1, 'What do you want for mains?'),
  (1, 'What do you want for desert?'),
  (1, 'Do you have any dietary requirements?'),
  (1, 'If so, what are they?'),
  (1, 'Do you wish to bring a guest?'),
  (1, 'If so, does your guest have any dietary requirements?'),
  (1, 'What does your guest want for starters?'),
  (1, 'What does your guest want for mains?'),
  (1, 'What does your guest want for desert?');

INSERT INTO lit_events.survey_answers (question_id, survey_id, answer) VALUES
  (1, 1, 'Soup'),
  (1, 2, 'Steak'),
  (1, 3, 'Apple Tart'),
  (1, 4, 'No'),
  (1, 5, 'N/A'),
  (1, 6, 'Yes'),
  (1, 7, 'Gluten free'),
  (1, 8, 'Soup'),
  (1, 9, 'Salad'),
  (1, 10, 'Chocolate Torte');

INSERT INTO lit_events.event_registration (event_id, employee_id, guest_id, survey_id, guest_fee_paid, socom_member, contractor) VALUES
  (1, 'n0123456', 1, 1, true, true, false),
  (1, 'n0123457', 2, 1, true, true, false),
  (1, 'n0123458', 3, 1, false, false, false);
INSERT INTO lit_events.event_registration (event_id, employee_id, survey_id, guest_fee_paid, socom_member, contractor) VALUES
  (1, 'n0123459', 1, false, false, false),
  (1, 'n0123410', 1, false, false, false),
  (1, 'n0123411', 1, false, false, true),
  (1, 'n0123412', 1, false, false, false),
  (1, 'n0123413', 1, false, false, false),
  (1, 'n0123414', 1, false, false, false),
  (1, 'n0123415', 1, false, false, false);