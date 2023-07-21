# password-checker app

## TASK:

Create application to test password strength.

**The essence of the assignment:**

Create a field for entering a password, under the field add 3 sections which will show the strength of the password.

Changes in password strength must take place in real time.

**How to calculate the strength of a password:**

- only **letters/digits/symbols** - the password is _easy_

- combination of **letters-symbols/letters-digits/digits-symbols** - the password is _medium_.

- has **letters, symbols and numbers** - the password is _strong_.

**The color of the sections will depend on the strength of the password:**

- if the field is _empty_, **all sections are gray**.

- if the field has _less than 8 characters_, **all sections are red**.

- if the password is _easy_ - **the first section is red the rest are gray**.

- if the password is _medium_ - **the first two sections are yellow the last one is gray**.

- if the password is _strong_, **all sections are green**.
