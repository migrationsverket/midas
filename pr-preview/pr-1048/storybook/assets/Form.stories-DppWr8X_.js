import{j as e}from"./iframe-CtFwdAsv.js";import{$ as c}from"./Form-yWD9DB3c.js";import{G as d}from"./Grid-CM5d1g1b.js";import{G as i}from"./GridItem-Dkmyn_r1.js";import{a as x,R as u}from"./Radio-DiARjRmD.js";import{C as I}from"./CheckboxGroup-7nArACAe.js";import{C as G}from"./Checkbox-HMXMyHYV.js";import{T as t}from"./TextField-wl_EUFGX.js";import{S as l}from"./Select-iCKevga6.js";import{L as p}from"./ListBoxItem-DvXLZgMo.js";import{B as a}from"./Button-zyqmdcUk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-v3QsXCFb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B9JoZcd_.js";import"./useFocusRing-4dXyLk97.js";import"./index-CC8QKcxH.js";import"./index-B04nzdf1.js";import"./clsx-Ciqy0D92.js";import"./Group-Dm251RrR.js";import"./FieldError-rC39neWl.js";import"./Text-DLLk5-WP.js";import"./Text-CbKa99gG.js";import"./Button-Dsas9bQI.js";import"./Hidden-DVSOiNkA.js";import"./number-DfkVkf0F.js";import"./useLabels-Ot2JOOvi.js";import"./useButton-pKf2Kj0y.js";import"./SelectionIndicator-CGJoHFxL.js";import"./useField-C2a_Lo9C.js";import"./VisuallyHidden-rVLj1Hba.js";import"./useControlledState-CWjJjGF9.js";import"./Label-D6FRgveb.js";import"./Dialog-lO9NJCnF.js";import"./RSPContexts-0m4AhG_r.js";import"./OverlayArrow-D_3BhxPL.js";import"./useResizeObserver-DLhsAarq.js";import"./Collection-ClpHBUlT.js";import"./index-Cl36apJ0.js";import"./Separator-s5a5IZMN.js";import"./SelectionManager-BYG4l7zL.js";import"./useEvent-cGdcjq2p.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-ByveFpkP.js";import"./ListKeyboardDelegate-CIuyyYw2.js";import"./PressResponder-ukHD2BbP.js";import"./useLocalizedStringFormatter-BBunPQfy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DV27w9Rl.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-DMsjUhVx.js";import"./x-CZS7rfMM.js";import"./createLucideIcon-DtbaAKiS.js";import"./useLocalizedStringFormatter-BYNQKoGb.js";import"./Heading-D42QPCss.js";import"./info-Bd14-v8m.js";import"./Popover-BnsNwADp.js";import"./check-G9qeHkPt.js";import"./useToggleState-CFzrgmFZ.js";import"./TextFieldBase-D0SN0VnJ.js";import"./Input-cLfDtPcn.js";import"./useTextField-CSI2cFpL.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-14ephFgh.js";import"./DragAndDrop-CxoAvxSN.js";import"./inertValue-DtuX4sgn.js";import"./useListState-DVcDjKPI.js";import"./Tag-CDyoadwD.js";import"./useHighlightSelectionDescription-qKTxiIey.js";import"./useUpdateEffect-wIHcDazw.js";import"./useHasTabbableChild-C45Mp1fW.js";import"./chevron-down-hv9Woksk.js";import"./Virtualizer-DAaKwcEA.js";import"./Button.module-Co5e5YHp.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
