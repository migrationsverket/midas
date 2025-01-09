import React, { Children, ReactNode, useContext, useEffect, useState } from 'react';
import styles from './progress.module.css';
import clsx from 'clsx';
import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabListStateContext,
} from 'react-aria-components';
import { ChevronRight, Check } from 'lucide-react';

export interface Steps {
  title: string;
  hasProgressed?: boolean; // Controlled by parent logic
  canProgress?: boolean; // Controlled by child validation
}

export interface ProgressProps {
  steps: Steps[];
  children?: ReactNode; // Pass dynamic components as children
}

interface TabListState {
  collection: {
    getKeyBefore: (key: string) => string | null;
    getKeyAfter: (key: string) => string | null;
  };
  selectedKey: string;
  setSelectedKey: (key: string) => void;
}

function TabNavigation({
  steps,
  setSteps,
}: {
  steps: Steps[];
  setSteps: React.Dispatch<React.SetStateAction<Steps[]>>;
}) {
  const state = useContext(TabListStateContext) as TabListState;

  if (!state) {
    return null;
  }

  const currentStepIndex = steps.findIndex(
    (step) => step.title === state.selectedKey
  );

  const prevKey = state.collection.getKeyBefore(state.selectedKey);
  const nextKey = state.collection.getKeyAfter(state.selectedKey);

  const canMoveToPrev = currentStepIndex > 0;
  const canMoveToNext =
    currentStepIndex < steps.length - 1 && steps[currentStepIndex]?.canProgress;

  const onPrev =
    prevKey && canMoveToPrev ? () => state.setSelectedKey(prevKey) : undefined;

  const onNext =
    nextKey && canMoveToNext
      ? () => {
          setSteps((prevSteps) =>
            prevSteps.map((step, index) =>
              index === currentStepIndex
                ? { ...step, hasProgressed: true }
                : step
            )
          );

          state.setSelectedKey(nextKey);
        }
      : undefined;

  return (
    <div className={styles.buttonGroup}>
      <button
        aria-label="Previous tab"
        onClick={onPrev}
        disabled={!canMoveToPrev}
        className={clsx(!canMoveToPrev && styles.disabled)}
      >
        ←
      </button>
      <button
        aria-label="Next tab"
        onClick={onNext}
        disabled={!canMoveToNext}
        className={clsx(!canMoveToNext && styles.disabled)}
      >
        →
      </button>
    </div>
  );
}

export const Progress: React.FC<ProgressProps> = ({
  steps: initialSteps,
  children,
}) => {
  const [steps, setSteps] = useState<Steps[]>(initialSteps);
  const [selectedTab, setSelectedTab] = useState<string>(steps[0]?.title);
  const currentStep = steps.findIndex((step) => step.title === selectedTab);
  useEffect(() => {
    console.log('Steps state has changed:', steps);
  }, [steps]);

  const handleValueChange = (value: string, valid: boolean) => {
    setSteps((prevSteps) =>
      prevSteps.map((step, index) =>
        index === currentStep ? { ...step, canProgress: valid } : step
      )
    );

  };

  return (
    <div>
      <Tabs
        className={styles.progressContainer}
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key as string)}
      >
        <TabList aria-label="Tabs" className={styles.stepsContainer}>
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            return (
              <Tab
                key={step.title}
                id={step.title}
                isDisabled={!step.canProgress}
                className={clsx(
                  styles.step,
                  isCompleted && styles.completed,
                  index === currentStep && styles.current
                )}
              >
                <div
                  className={clsx(
                    styles.stepTitle,
                    isCompleted && styles.completed,
                    index === currentStep && styles.current
                  )}
                >
                  {index === currentStep && <ChevronRight />}
                  {isCompleted && index < currentStep && <Check />}
                </div>
                {step.title}
                {index < steps.length - 1 && (
                  <div
                    className={clsx(
                      styles.progressBar,
                      isCompleted && styles.progressBarCompleted
                    )}
                  />
                )}
              </Tab>
            );
          })}
        </TabList>

        {Children.map(children, (child, index) => (
          <TabPanel
            key={steps[index]?.title || index}
            id={steps[index]?.title}
            className={styles.panel}
          >
            {React.cloneElement(child as React.ReactElement<any>, {
              onValueChange: handleValueChange,
            })}
          </TabPanel>
        ))}

        <TabNavigation steps={steps} setSteps={setSteps} />
      </Tabs>
    </div>
  );
};
//####111


// Define types for form fields
interface FormField {
  name: string;
  type: "text" | "email" | "checkbox";
  label: string;
  required?: boolean;
  validation?: (value: string | boolean) => boolean;
  
}

// Define the configuration of the form
const formConfig: FormField[] = [
  {
    name: "username",
    type: "text",
    label: "Username",
    required: true,
    validation: (value) => typeof value === "string" && value.trim().length > 0,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
    validation: (value) =>
      typeof value === "string" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  },
  {
    name: "agreeToTerms",
    type: "checkbox",
    label: "Agree to terms and conditions",
    required: true,
    validation: (value) => value === true,
  },
];

export const DynamicForm: React.FC = () => {
  // State to hold form values dynamically
  const [formData, setFormData] = useState<{ [key: string]: string | boolean }>(
    {}
  );
  const [isValid, setIsValid] = useState(false);

  // Function to validate the form dynamically
  const validateForm = (data: { [key: string]: string | boolean }) => {
    return formConfig.every((field) => {
      if (!field.required) return true;
      const value = data[field.name];
      return field.validation ? field.validation(value) : true;
    });
  };

  // Handle input change dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    const updatedFormData = {
      ...formData,
      [name]: newValue,
    };

    setFormData(updatedFormData);
    setIsValid(validateForm(updatedFormData));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>
            {field.label}
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              onChange={handleChange}
              value={
                field.type !== "checkbox"
                  ? (formData[field.name] as string) || ""
                  : undefined
              }
              checked={
                field.type === "checkbox"
                  ? (formData[field.name] as boolean) || false
                  : undefined
              }
            />
          </label>
        </div>
      ))}
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};


