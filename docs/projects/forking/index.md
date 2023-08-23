---
sidebar_position: 4
---

# Forking

When working on a project, it's crucial to recognize that **introducing new changes**—whether due to contractual obligations or other reasons—**has the potential to disrupt existing clients relying on those mocks**. In such situations, it's often prudent to ensure that these changes do not take effect until all clients have had a chance to adapt to the new API structure or alterations.

![Screenshot](forking.png)

To address this challenge, you can employ a solution that allows you to **create a fork of the existing project**. With a fork, you can confidently **implement your changes without impacting the rest of the project**. Essentially, a fork is a **brand-new project that replicates all endpoints**, with **you as its sole member**.

## Merging changes back

It's important to note that, at the moment, there is **no direct mechanism to seamlessly merge these changes back into the source project**. The process of integration currently requires **manual copying and pasting** of the modified components.

I am actively **exploring the most effective approach for enabling smooth merging**. If you have **any innovative ideas or suggestions**, please don't hesitate to **reach out via direct message or submit an issue**. Your input is highly valued!