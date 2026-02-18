import{j as e}from"./iframe-DGcUF2qp.js";import{$ as c}from"./Form-De-D48Sg.js";import{G as d}from"./Grid-DvZ7dUQW.js";import{G as i}from"./GridItem-BsYfnvSN.js";import{a as x,R as u}from"./Radio-C8npHuOU.js";import{C as I}from"./CheckboxGroup-DDJsLsEg.js";import{C as G}from"./Checkbox-DVHteJdL.js";import{T as t}from"./TextField-B_034t2x.js";import{S as l}from"./Select-CGcO2ZNH.js";import{L as p}from"./ListBoxItem-NeUrxbdO.js";import{B as a}from"./Button-BDoKvS7o.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C-g9IEHW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BkBYuxfH.js";import"./useFocusRing-C3JE--XH.js";import"./index-Bg1abCEO.js";import"./index-6FNMycov.js";import"./clsx-Ciqy0D92.js";import"./Group-Bwq1pMnA.js";import"./FieldError-BuaTWgbZ.js";import"./Text-DL34Z6xI.js";import"./Text-DxpETNh1.js";import"./Button-9W9ESKk6.js";import"./Hidden-DOf4aCVT.js";import"./number-DfkVkf0F.js";import"./useLabels-BWET_vJS.js";import"./useButton-CxyzWvKY.js";import"./SelectionIndicator-BY22CEnJ.js";import"./useField-C6LcJdMu.js";import"./VisuallyHidden-CFai959P.js";import"./useControlledState-BY4jsp46.js";import"./Label-CG9x1TMh.js";import"./Dialog-B3uOHczp.js";import"./RSPContexts-DKg32s8o.js";import"./OverlayArrow-CNzC3Wiq.js";import"./useResizeObserver-7CmSTaLc.js";import"./Collection-BHHJS68Q.js";import"./index-9gKA1Giu.js";import"./Separator-DAYXuI2I.js";import"./SelectionManager-DN9c7-ZC.js";import"./useEvent-C8sq29ir.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-SjgewDGU.js";import"./ListKeyboardDelegate-D1qTWSED.js";import"./PressResponder-BupWutZX.js";import"./useLocalizedStringFormatter-M0xxk-YJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RPVP9h17.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-CcPUcTIL.js";import"./x-CQouQTE6.js";import"./createLucideIcon-vaKNso9Q.js";import"./useLocalizedStringFormatter-E6uNiOFA.js";import"./Heading-Bft_YpUD.js";import"./info-w3a2jKL-.js";import"./Popover-CpNrjDWb.js";import"./check-DpZ4Taxh.js";import"./useToggleState-DuWz41tL.js";import"./TextFieldBase-B4Jaslka.js";import"./Input-DhSHlGR1.js";import"./useTextField-BYywxUeg.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-xVurwdTF.js";import"./DragAndDrop-D9IT6Tbv.js";import"./inertValue-x790djUJ.js";import"./useListState-YWXa9-U2.js";import"./TagGroup-DmXgNpwB.js";import"./useHighlightSelectionDescription-DHDNWOvz.js";import"./useUpdateEffect-C0_gSjEd.js";import"./useHasTabbableChild-CjixjnKV.js";import"./chevron-down-m92AjLGj.js";import"./Virtualizer-FXUqF3EA.js";import"./Button.module-Co5e5YHp.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ke=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Ke as __namedExportsOrder,ye as default};
