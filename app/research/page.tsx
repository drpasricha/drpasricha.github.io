import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { FileText, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Research",
}

const publications = [
  {
    category: "Journal Articles",
    icon: FileText,
    items: [
      {
  title: "Vulnerable options under a Hawkes jump-diffusion model with two-factor stochastic volatility",
  authors: "Pasricha Puneet, He Xinjiang",
  venue: "International Review of Financial Analysis, Accepted for publication, 2026",
  link: "https://doi.org/10.1016/j.irfa.2026.105095",
},
{
  title: "Risk reduced sparse index tracking portfolio: A topological data analysis approach",
  authors: "Goel Anubha, Pasricha Puneet, Kanniainen Juho",
  venue: "Omega, Vol. 138, 2025",
  link: "https://doi.org/10.1016/j.omega.2025.103432",
},
{
  title: "Sparse portfolio selection via topological data analysis based clustering",
  authors: "Goel Anubha, Filipović Damir, Pasricha Puneet",
  venue: "Quantitative Finance, 25(8), 1261–1291, 2025",
  link: "https://doi.org/10.1080/14697688.2025.2544762",
},
{
  title: "European Option Pricing in Regime Switching Framework via Physics-Informed Residual Learning",
  authors: "Pande Naman Krishna, Pasricha Puneet, Gupta Arvind Kumar, Kumar Arun",
  venue: "Expert Systems with Applications, Vol. 288, 2025",
  link: "https://doi.org/10.1016/j.eswa.2025.128226",
},
{
  title: "Vulnerable options with regime switching and stochastic liquidity",
  authors: "He Xinjiang, Pasricha Puneet, Lu Tuantuan, Lin Sha",
  venue: "The Quarterly Review of Economics & Finance, Vol. 98, 2024",
  link: "https://doi.org/10.1016/j.qref.2024.101930",
},
{
  title: "Analytically pricing European options in dynamic markets: Incorporating liquidity variations and economic cycles",
  authors: "He Xinjiang, Pasricha Puneet, Sha Lin",
  venue: "Economic Modelling, Vol. 139, 2024",
  link: "https://doi.org/10.1016/j.econmod.2024.106839",
},
{
  title: "Structural credit risk models with stochastic default barriers and jump clustering using Hawkes jump-diffusion processes",
  authors: "Pasricha Puneet, Dharmaraja Selvamuthu, Tardelli Paola",
  venue: "OPSEARCH, Forthcoming, 2024",
  link: "https://doi.org/10.1007/s12597-024-00830-9",
},
{
  title: "Exchange options with stochastic liquidity risk",
  authors: "Pasricha Puneet, He Xinjiang",
  venue: "Expert Systems with Applications, Vol. 223, 2023",
  link: "https://doi.org/10.1016/j.eswa.2023.119915",
},
{
  title: "A simple European option pricing formula with a skew-Brownian motion",
  authors: "Pasricha Puneet, He Xinjiang",
  venue: "Probability in the Engineering and Informational Sciences, 37(4), 1029-1034, 2022",
  link: "https://doi.org/10.1017/S0269964822000407",
},
{
  title: "Skew-Brownian motion and pricing European exchange options",
  authors: "Pasricha Puneet, He Xinjiang",
  venue: "International Review of Financial Analysis, Vol. 82, 2022",
  link: "https://doi.org/10.1016/j.irfa.2022.102120",
},
{
  title: "A contagion process with self-exciting jumps in credit risk applications",
  authors: "Pasricha Puneet, Dharmaraja Selvamuthu, Selvaraju Natarajan",
  venue: "Stochastics: An International Journal Of Probability And Stochastic Processes, 95(1), 79-98, 2022",
  link: "https://doi.org/10.1080/17442508.2022.2041641",
},
{
  title: "A closed-form pricing formula for European options in an illiquid asset market",
  authors: "Pasricha Puneet, Zhu Song-Ping, He Xinjiang",
  venue: "Financial Innovation, 8(30), 2022",
  link: "https://doi.org/10.1186/s40854-022-00337-6",
},
{
  title: "Hedging and utility valuation of a defaultable claim driven by Hawkes processes",
  authors: "Pasricha Puneet, Dharmaraja Selvamuthu, Tardelli Paola",
  venue: "Applied Stochastic Models in Business and Industry, 38(2), 334–352, 2021",
  link: "https://doi.org/10.1002/asmb.2663",
},
{
  title: "A closed-form pricing formula for European options with market liquidity risk",
  authors: "Pasricha Puneet, Zhu Song-Ping, He Xinjiang",
  venue: "Expert Systems with Applications, Vol. 189, 2021",
  link: "https://doi.org/10.1016/j.eswa.2021.116128",
},
{
  title: "A closed-form pricing formula for pricing catastrophe equity options",
  authors: "Pasricha Puneet, Goel Anubha, Zhu Song-Ping",
  venue: "Probability in the Engineering and Informational Sciences, 36(4), 1103-1115, 2021",
  link: "https://doi.org/10.1017/S0269964821000279",
},
{
  title: "Non-homogeneous Markov regenerative process with recurrence times and application in credit rating dynamics",
  authors: "Pasricha Puneet, Dharmaraja Selvamuthu",
  venue: "Financial Innovation, 7(37), 2021",
  link: "https://doi.org/10.1186/s40854-021-00255-z",
},
{
  title: "Valuation Of equity-indexed annuities under correlated jump-diffusion processes",
  authors: "Sharma Nitu, Pasricha Puneet, Dharmaraja Selvamuthu",
  venue: "Journal of Computational and Applied Mathematics, Vol. 395, 2021",
  link: "https://doi.org/10.1016/j.cam.2021.113575",
},
{
  title: "Pricing of power exchange options with Hawkes jump diffusion process",
  authors: "Pasricha Puneet, Goel Anubha",
  venue: "Journal of Industrial and Management Optimization, 17(1), 133-149, 2021",
  link: "https://doi.org/10.3934/jimo.2019103",
},
{
  title: "A closed-form pricing formula European exchange options with stochastic volatility",
  authors: "Pasricha Puneet, Goel Anubha",
  venue: "Probability in the Engineering and Informational Sciences, 36(3), 606-615, 2021",
  link: "https://doi.org/10.1017/S0269964820000698",
},
{
  title: "A note on the calculation of default probabilities in 'Structural credit risk modelling with Hawkes jump-diffusion processes'",
  authors: "Pasricha Puneet, Lu Xiaoping, Zhu Song-Ping",
  venue: "Journal of Computational and Applied Mathematics, Vol. 381, 2021",
  link: "https://doi.org/10.1016/j.cam.2020.113037",
},
{
  title: "Portfolio optimization of credit risky bonds: a semi-Markov process approach",
  authors: "Pasricha Puneet, Dharmaraja Selvamuthu, D'Amico Guglielmo, Manca Raimondo",
  venue: "Financial Innovation, 6(1), 1-14, 2020",
  link: "https://doi.org/10.1186/s40854-020-00186-1",
},
{
  title: "Topological data analysis in investment decisions",
  authors: "Goel Anubha, Pasricha Puneet, Mehra Aparna",
  venue: "Expert Systems with Applications, Vol. 147, 2020",
  link: "https://doi.org/10.1016/j.eswa.2020.113222",
},
{
  title: "A review of non-Markovian models for the dynamics of credit ratings",
  authors: "D'Amico Guglielmo, Dharmaraja Selvamuthu, Manca Raimondo, Pasricha Puneet",
  venue: "Reports on Economics and Finance, 5(1), 15–33, 2019",
  link: "https://doi.org/10.12988/ref.2019.81224",
},
{
  title: "A Markov modulated dynamic contagion process with application to credit risk",
  authors: "Pasricha Puneet, Dharmaraja Selvamuthu",
  venue: "Journal of Statistical Physics, 175(2), 495–511, 2019",
  link: "https://doi.org/10.1007/s10955-019-02264-w",
},
{
  title: "Pricing vulnerable power exchange options in an intensity based framework",
  authors: "Pasricha Puneet, Goel Anubha",
  venue: "Journal of Computational and Applied Mathematics, 355, 106–115, 2019",
  link: "https://doi.org/10.1016/j.cam.2019.01.019",
},
{
  title: "Markov chain model with catastrophe to determine mean time to default of credit risky assets",
  authors: "Dharmaraja Selvamuthu, Pasricha Puneet, Tardelli Paola",
  venue: "Journal of Statistical Physics, 169(4), 876–888, 2017",
  link: "https://doi.org/10.1007/s10955-017-1890-z",
},
{
  title: "Markov regenerative credit rating model",
  authors: "Pasricha Puneet, Dharmaraja Selvamuthu, Arunachalam Viswanathan",
  venue: "Journal of Risk Finance, 18(3), 311–325, 2017",
  link: "https://doi.org/10.1108/JRF-09-2016-0123",
},
    ],
  },
  {
    category: "Conference Papers",
    icon: FileText,
    items: [
      {
        title: "Placeholder Conference Paper Title",
        authors: "Your Name, Co-Author D",
        venue: "Proceedings of the Annual Conference on Placeholder Research, 2025",
        link: "#",
      },
    ],
  },
  {
    category: "Working Papers",
    icon: FileText,
    items: [
      {
        title: "Placeholder Working Paper Title",
        authors: "Your Name",
        venue: "In preparation",
        link: null,
      },
    ],
  },
]

export default function ResearchPage() {
  return (
    <div>
      <PageHeader
        title="Research"
        description="Publications, working papers, and ongoing research."
      />
      <div className="mx-auto max-w-5xl px-6">
        {publications.map((section, idx) => (
          <div key={section.category}>
            {idx > 0 && <div className="border-t border-border" />}
            <Section title={section.category}>
              <ul className="flex flex-col gap-5">
                {section.items.map((pub, i) => (
                  <li
                    key={i}
                    className="card-hover group rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      {pub.link ? (
                        <a
                          href={pub.link}
                          className="link-underline relative text-sm font-semibold text-foreground"
                        >
                          {pub.title}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-foreground">{pub.title}</span>
                      )}
                      {pub.link && (
                        <a
                          href={pub.link}
                          className="mt-0.5 shrink-0 text-muted-foreground transition-colors hover:text-accent"
                          aria-label={`Link to ${pub.title}`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{pub.authors}</p>
                    <p className="mt-1 text-xs italic text-muted-foreground/80">{pub.venue}</p>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        ))}
      </div>
    </div>
  )
}
