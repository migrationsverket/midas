import{j as e}from"./iframe-C7QVanE1.js";import{$ as c}from"./Form-z3vPy4HV.js";import{G as d}from"./Grid-Bewxg7xn.js";import{G as i}from"./GridItem-nHp4LQhf.js";import{T as t}from"./TextField-DoLXUk2J.js";import{S as l}from"./Select-23YhZgeA.js";import{B as a}from"./Button-CCRsXMgo.js";import{R as x,a as u}from"./Radio-Cr3ZTHpj.js";import{C as I}from"./CheckboxGroup-CDFdMPf7.js";import{C as G}from"./Checkbox-B-hfOU4U.js";import{L as p}from"./ListBoxItem-C1jz-nff.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DryWrSsO.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DgNcLFsP.js";import"./useFocusRing-CUPRYPTR.js";import"./index-CZH-gIg2.js";import"./index-CQdr9i86.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-gOV4orFA.js";import"./TextField-DJgV6m_S.js";import"./FieldError-Bc8wiCVr.js";import"./Text-Caxmjr4k.js";import"./Text-DDFZmojY.js";import"./RSPContexts-B6-3qImG.js";import"./Group-CRl1oIsH.js";import"./Input-Dil5wJ-4.js";import"./Hidden-DWveG1to.js";import"./Button-B0ygehGU.js";import"./useLabels-CDWq4CCD.js";import"./useButton-Bgb6cmzM.js";import"./useTextField-D05VSCUA.js";import"./useControlledState-wg0wExfo.js";import"./useField-BkcLQ7gE.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DFC4Ayxj.js";import"./Dialog-DnW7z-lO.js";import"./OverlayArrow-C493vImD.js";import"./useResizeObserver-CeLtm5-b.js";import"./Collection-CfvVOKcU.js";import"./index-CN6QiRf-.js";import"./Separator-gW8aqniL.js";import"./SelectionManager-CN43C4SR.js";import"./useEvent-Bn3ja8Lv.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BP1jOhS7.js";import"./useDescription-Bd9LwgFX.js";import"./ListKeyboardDelegate-Byqn4HKE.js";import"./PressResponder-BeST1YwG.js";import"./useLocalizedStringFormatter-CpMZdteZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BbdnziW9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-6jSDaJWd.js";import"./x-BoziCGps.js";import"./createLucideIcon-Ci9lC38R.js";import"./useLocalizedStringFormatter-DHWurjhu.js";import"./Heading-DLpZtmIA.js";import"./info-NvV6yIu1.js";import"./Popover-CrAgRj2O.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BUCKmLri.js";import"./DragAndDrop-DOcSfqga.js";import"./inertValue-CE7l64Ex.js";import"./useListState-D0BKmZFk.js";import"./Tag-CNKNKmnR.js";import"./useHighlightSelectionDescription-nK1mqxvP.js";import"./useUpdateEffect-HA6W154m.js";import"./useHasTabbableChild-CyDCFHl9.js";import"./chevron-down-B__LqQBw.js";import"./Button.module-Co5e5YHp.js";import"./check-CYFHui6x.js";import"./useToggleState-COAyCMP5.js";import"./Virtualizer-B9MhnvqZ.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
