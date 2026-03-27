import React, { useEffect } from "react";
import {
  architectureStages,
  caseStudies,
  channelFlow,
  contactFields,
  executionPlan,
  heroSignals,
  navItems,
  principles,
  problems,
  services,
} from "./siteContent";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("reveal-section");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark" />
          <span className="brand-text">
            <strong>MedGrowth Lab</strong>
            <small>Branding + CRM for clinics</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          Get Free Diagnosis
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">MedGrowth Lab</p>
            <h1>Build a clinic that grows without ads.</h1>
            <p className="hero-text">
              병원 브랜딩과 <strong>CRM 구조</strong>를 함께 설계해<br />
              광고를 줄여도 <strong>예약과 재방문</strong>이 남는<br className="mobile-break" /> 성장 시스템을 만듭니다.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                Get Free Diagnosis
              </a>
              <a className="secondary-button" href="#architecture">
                See Growth Architecture
              </a>
            </div>
            <div className="hero-signals" aria-label="Key signals">
              {heroSignals.map((item) => (
                <div key={item.label} className="signal-item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="video-background fluid-container">
              <div className="orb orb1" />
              <div className="orb orb2" />
              <div className="video-overlay" />
            </div>
            <div className="hero-grid" />
            <div className="visual-panel panel-primary">
              <p>Growth Architecture</p>
              <strong>Brand</strong>
              <span />
              <strong>CRM</strong>
            </div>
            <div className="visual-panel panel-secondary">
              <p>Conversion Focus</p>
              <ul>
                <li>Inquiry</li>
                <li>Booking</li>
                <li>Revisit</li>
              </ul>
            </div>
            <div className="visual-orbit visual-orbit-one" />
            <div className="visual-orbit visual-orbit-two" />
          </div>
        </section>

        <section className="insight-band">
          <p>
            광고를 더 집행하기 전에, <br className="mobile-break" />
            <strong>어떤 환자를 끌어오고 어떤 경험으로 다시 오게 만들지부터</strong> 설계해야 합니다.
          </p>
        </section>

        <section className="problem-solution">
          <div className="section-heading">
            <p className="eyebrow">Why Clinics Stall</p>
            <h2>광고 효율이 아니라 성장 구조를 먼저 점검해야 합니다.</h2>
          </div>
          <div className="problem-solution-grid">
            <div>
              <p className="mini-label">Problems</p>
              <ul className="text-list">
                {problems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mini-label">Our Principle</p>
              <ul className="text-list emphasis">
                {principles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>단기 광고가 아닌 <strong>지속 가능한 병원 성장 구조</strong>를 설계합니다.</h2>
          </div>
          <div className="about-layout">
            <p>
              MedGrowth Lab은 병원 브랜딩과 CRM 시스템을 결합해 원장님이 <strong>매출을
              통제할 수 있는 구조</strong>를 만드는 컨설팅 브랜드입니다. 유입, 상담,
              예약, 재방문까지 하나의 흐름으로 설계해 <strong>광고 의존도</strong>를 낮춥니다.
            </p>
            <p>
              핵심은 더 많은 캠페인이 아니라 <strong>더 나은 구조</strong>입니다. 병원이 어떤
              환자를 끌어오고, 어떤 경험으로 신뢰를 만들고, 어떻게 재방문으로
              이어지게 할지까지 함께 설계합니다.
            </p>
          </div>
        </section>

        <section className="architecture-section" id="architecture">
          <div className="section-heading">
            <p className="eyebrow">Architecture</p>
            <h2>유입에서 재방문까지 병원 성장의 흐름을 하나의 구조로 연결합니다.</h2>
          </div>
          <div className="architecture-layout">
            <div className="architecture-list">
              {architectureStages.map((item) => (
                <article key={item.step} className="architecture-item">
                  <div className="architecture-step">{item.step}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="channel-flow">
              <p className="mini-label">Channel Flow</p>
              <div className="flow-track">
                {channelFlow.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="case-study-section" id="case-study">
          <div className="section-heading">
            <p className="eyebrow">Case Study</p>
            <h2>문제, 해결, 결과가 한눈에 보이도록 사례를 구조적으로 설명합니다.</h2>
          </div>
          <div className="case-study-list">
            {caseStudies.map((item) => (
              <article key={item.title} className="case-study-item">
                <div className="case-study-lead">
                  <h3>{item.title}</h3>
                  <strong>{item.metric}</strong>
                </div>
                <div className="case-study-copy">
                  <p>
                    <strong>Problem</strong>
                    {item.problem}
                  </p>
                  <p>
                    <strong>Solution</strong>
                    {item.solution}
                  </p>
                  <p>
                    <strong>Result</strong>
                    {item.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="service-section" id="service">
          <div className="section-heading">
            <p className="eyebrow">Service</p>
            <h2>무료 진단에서 확장 전략까지 단계별로 깊어지는 구조입니다.</h2>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <article key={service.name} className="service-item">
                <div className="service-lead">
                  <span>{`0${index + 1}`}</span>
                  <h3>{service.name}</h3>
                </div>
                <div className="service-copy">
                  <p>{service.summary}</p>
                  <ul className="service-points">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="plan-section">
          <div className="section-heading">
            <p className="eyebrow">14-Day Plan</p>
            <h2>짧은 기간 안에 구조를 점검하고 전환 흐름을 세우는 방식으로 진행합니다.</h2>
          </div>
          <div className="plan-list">
            {executionPlan.map((item) => (
              <article key={item.label} className="plan-item">
                <p className="plan-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>현재 병원 성장 구조를 무료로 진단받아 보세요.</h2>
            <p>
              이름, 병원명, 연락처와 함께 현재 가장 큰 고민을 남기면 상담용 구조
              진단 기준으로 후속 대화를 이어갈 수 있습니다.
            </p>
            <div className="contact-notes">
              <span>무료 구조 진단</span>
              <span>전환 병목 체크</span>
              <span>CRM 흐름 제안</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {contactFields.map((field) => (
              <label key={field.name}>
                <span>{field.label}</span>
                <input type={field.type} name={field.name} placeholder={field.label} />
              </label>
            ))}
            <label>
              <span>고민</span>
              <textarea
                name="message"
                rows="5"
                placeholder="광고 의존, 예약 전환, 재방문, 브랜딩 등 현재 고민을 입력하세요."
              />
            </label>
            <button className="primary-button" type="submit">
              상담 신청
            </button>
            <small className="form-note">
              현재는 프론트 시안 단계이며, 제출 연동은 다음 단계에서 연결합니다.
            </small>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>MedGrowth Lab</p>
        <span>Clinic branding and CRM growth structure for sustainable conversion.</span>
      </footer>
    </div>
  );
}

export default App;

