import { create } from 'zustand'

const useMeslekiStore = create((set) => ({
  // ISO 27001 simülasyonu için cevaplar
  iso27001Answers: {
    scenario1: { checked: false, isCorrect: false },
    scenario2: { checked: false, isCorrect: false }
  },
  
  // PCI-DSS simülasyonu için cevaplar
  pciDssAnswers: {
    scenario1: { checked: false, isCorrect: false }
  },
  
  // KVKK simülasyonu için cevaplar
  kvkkAnswers: {
    scenario1: { checked: false, isCorrect: false }
  },
  
  // Genel simülasyon puanı
  simulationScore: 0,
  simulationCompleted: false,
  
  // Cevapları kontrol etme ve puanı hesaplama
  checkAnswer: (category, scenario, answer) => {
    let isCorrect = false;
    
    // Cevap kontrolü
    if (category === 'iso27001') {
      if (scenario === 'scenario1') {
        isCorrect = answer === 'no'; // Uyumlu değil
      } else if (scenario === 'scenario2') {
        isCorrect = answer === 'no'; // Uyumlu değil
      }
    } else if (category === 'pciDss') {
      if (scenario === 'scenario1') {
        isCorrect = answer === 'no'; // Uyumlu değil
      }
    } else if (category === 'kvkk') {
      if (scenario === 'scenario1') {
        isCorrect = answer === 'no'; // Uyumlu değil
      }
    }
    
    // State güncelleme
    set((state) => {
      let newScore = state.simulationScore;
      
      // Eğer daha önce kontrol edilmemişse ve doğruysa puan ekle
      if (category === 'iso27001' && !state.iso27001Answers[scenario].checked && isCorrect) {
        newScore += 25;
      } else if (category === 'pciDss' && !state.pciDssAnswers[scenario].checked && isCorrect) {
        newScore += 25;
      } else if (category === 'kvkk' && !state.kvkkAnswers[scenario].checked && isCorrect) {
        newScore += 25;
      }
      
      // İlgili kategorinin state'ini güncelle
      if (category === 'iso27001') {
        return {
          iso27001Answers: {
            ...state.iso27001Answers,
            [scenario]: { checked: true, isCorrect }
          },
          simulationScore: newScore,
          simulationCompleted: 
            newScore === 100 || 
            (state.iso27001Answers.scenario1.checked && 
             state.iso27001Answers.scenario2.checked && 
             state.pciDssAnswers.scenario1.checked && 
             state.kvkkAnswers.scenario1.checked)
        };
      } else if (category === 'pciDss') {
        return {
          pciDssAnswers: {
            ...state.pciDssAnswers,
            [scenario]: { checked: true, isCorrect }
          },
          simulationScore: newScore,
          simulationCompleted: 
            newScore === 100 || 
            (state.iso27001Answers.scenario1.checked && 
             state.iso27001Answers.scenario2.checked && 
             state.pciDssAnswers.scenario1.checked && 
             state.kvkkAnswers.scenario1.checked)
        };
      } else if (category === 'kvkk') {
        return {
          kvkkAnswers: {
            ...state.kvkkAnswers,
            [scenario]: { checked: true, isCorrect }
          },
          simulationScore: newScore,
          simulationCompleted: 
            newScore === 100 || 
            (state.iso27001Answers.scenario1.checked && 
             state.iso27001Answers.scenario2.checked && 
             state.pciDssAnswers.scenario1.checked && 
             state.kvkkAnswers.scenario1.checked)
        };
      }
      
      return state;
    });
  },
  
  // Simülasyonu sıfırlama
  resetSimulation: () => {
    set({
      iso27001Answers: {
        scenario1: { checked: false, isCorrect: false },
        scenario2: { checked: false, isCorrect: false }
      },
      pciDssAnswers: {
        scenario1: { checked: false, isCorrect: false }
      },
      kvkkAnswers: {
        scenario1: { checked: false, isCorrect: false }
      },
      simulationScore: 0,
      simulationCompleted: false
    });
  }
}));

export default useMeslekiStore; 