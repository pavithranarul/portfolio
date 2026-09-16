# Portfolio content sources

Reviewed on 5 September 2026. Naukri was excluded at the user's request.

## Employment and education

- [Pavithran's LinkedIn profile](https://www.linkedin.com/in/pavithran-arul): identifies Mittai INC, describes Python/backend/AI work, lists Annamalai University (2021–2025), and shares the CareScribe team's CII WR 2025 recognition. His own 2023 posts document the Sparks Foundation banking/payment tasks and AIIRF internship. Other people's posts in his reactions are not evidence of his work.
- User confirmation: Pavithran is a Mittai INC employee; CareScribe belongs under his employer experience, not his personal projects.
- [CareScribe](https://carescribe.health/security-compliance): confirms the relationship between Mittai and CareScribe and describes its clinical-documentation product scope. Product-wide features are not attributed to Pavithran individually.
- Existing repository résumé, `public/assets/resume/pavithran_s_CV.pdf`: B.E. Computer Science and Engineering, Annamalai University, 2021–2025, GPA 8.68/10; Shiash InfoTech internship August–October 2024; AIIRF internship June–July 2023; their listed technologies and responsibilities.

The publicly accessible LinkedIn content did not expose a precise Mittai job title or joining date. The site uses a descriptive work area and “Current role”, not an invented date or seniority. The older résumé predates the current role, so the About section links to the current professional profiles rather than presenting that file as an up-to-date résumé.

## Personal projects

Public, non-fork repositories under [pavithranarul](https://github.com/pavithranarul), separated from the employer's product:

- [TrackFlow](https://github.com/pavithranarul/TrackFlow): Django 5.2 / Django REST Framework issue-tracking API with multi-tenant organizations, role-based project membership, enforced status transitions, audit trail, JWT auth (simplejwt) and OpenAPI schema; React + TypeScript (Vite) kanban UI in `frontend/`. Verified from README, `pyproject.toml` and `frontend/package.json`. Default database is SQLite; PostgreSQL is only a configuration option, so it is not claimed.
- [Connectivity Bridge](https://github.com/pavithranarul/connectivity_bridge): Flutter mobile app (Android/iOS) with Kotlin clipboard and notification-listener code, plus a Swift macOS LaunchAgent daemon running a WebSocket server; Bluetooth LE discovery per README. Single commit and not verified to run end to end, so it is labelled a prototype.
- [ECG heart disease detection](https://github.com/pavithranarul/Cardio_vascular_disease-backend): Flask `/predict` endpoint using ResNet50 features and a Keras LSTM model over four classes (arrhythmia, HMI, MI, normal), Gemini recommendation text and an FPDF report; the [React + Vite frontend](https://github.com/pavithranarul/Cardio_vascular_disease-frontend) posts to it and downloads the PDF. `ECG_analysis` is an earlier Gemini-only version and is not listed separately. No accuracy figures are claimed.
- [Octagram Chat](https://github.com/pavithranarul/AndroidDevelopment): Java Android app using Firebase Auth, Firestore, Storage and Cloud Messaging; phone login, username search, recent chats. README states the OTP flow is still in development, which the card repeats.
- [Failo](https://github.com/pavithranarul/failo): provider-independent Python retry/fallback library; standard-library runtime; README explicitly labels it an early release, not production-proven.
- [FluidAI](https://github.com/pavithranarul/FluidAI): FastAPI business-document generator using Gemini, Word export and in-memory sessions. Replaces the previous unsupported description of general autonomous tool-using agents.
- [Dinodial](https://github.com/pavithranarul/Dinodial-ai): restaurant voice calls, scheduled call processing, email confirmations, FastAPI and React. Replaces the vague “Voice Systems” description and unsupported WebRTC attribution.
- [WorkSphere](https://github.com/pavithranarul/Work-Sphere): employee CRUD application. README explicitly describes an assessment; backend and frontend package manifests verify Express, MongoDB/Mongoose and React. The assessment label is retained on the card.

Skills are tied to these repositories or the dated internship résumé. Unverified claims about production scale, reliability metrics, PostgreSQL/Redis expertise, and a personal CII award were removed. Project covers are illustrative, not claimed application screenshots.
