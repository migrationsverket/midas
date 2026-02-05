import{j as e}from"./iframe-CKGACLCX.js";import{$ as c}from"./Form-zEYGtEnB.js";import{G as d}from"./Grid-D-eTtD8U.js";import{G as i}from"./GridItem-D6GlFBxm.js";import{a as x,R as u}from"./Radio-CQk0C2r_.js";import{C as I}from"./CheckboxGroup-CKq1erq1.js";import{C as G}from"./Checkbox-BJrzOodh.js";import{T as t}from"./TextField-Bwl1ATCE.js";import{S as l}from"./Select-B7YWJcbj.js";import{L as p}from"./ListBoxItem-ikP1SM8t.js";import{B as a}from"./Button-8AXkha9Y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C1cYwrRL.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C0Fr8G0C.js";import"./useFocusRing-BuOXP8Hw.js";import"./index-DoQf3qpc.js";import"./index-oFvCdSIv.js";import"./clsx-Ciqy0D92.js";import"./Group-DrowKYWK.js";import"./FieldError-DI7Xo_Io.js";import"./Text-BArB5QvF.js";import"./Text-BXvNDZo-.js";import"./Button-54xKiT29.js";import"./Hidden-DNSOrP-i.js";import"./useLabels-DIZFogYA.js";import"./useButton-BILFtFpB.js";import"./SelectionIndicator-DmLJO3Jl.js";import"./useField-KuI-cIKx.js";import"./VisuallyHidden-BHIvprIA.js";import"./useControlledState-DDl3VCJO.js";import"./Label-D2RWakUL.js";import"./Dialog-CHx5kMQk.js";import"./RSPContexts-B9y_dSfG.js";import"./OverlayArrow-DyMZopGC.js";import"./useResizeObserver-8gm3Wp7p.js";import"./Collection-CjyQI97O.js";import"./index-D50zBG9z.js";import"./Separator-Dt6kxqOC.js";import"./SelectionManager-Gtya-evv.js";import"./useEvent-dreapgiA.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DWckP2Ca.js";import"./ListKeyboardDelegate-DovjS_lQ.js";import"./PressResponder-xTREjKZW.js";import"./useLocalizedStringFormatter-BI6jibPS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CpYyHkem.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DWT6hPY4.js";import"./createLucideIcon-RPOR-KCQ.js";import"./useLocalizedStringFormatter-CQvS5eyN.js";import"./Heading-BGD7UjEp.js";import"./info-BNJVi2Gx.js";import"./Popover-DeK1Vp5W.js";import"./check-BF2CYzdN.js";import"./useToggleState-1TmRPaJX.js";import"./TextFieldBase-B-e0hL8T.js";import"./TextField-C5ROB1Cu.js";import"./Input-DAQl0_ph.js";import"./useTextField-BqZnJe7O.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BV7UV6GS.js";import"./DragAndDrop-BjkKCBjS.js";import"./inertValue-CbNtabcY.js";import"./useListState-Bal71AOn.js";import"./Tag-DSxckQN1.js";import"./useHighlightSelectionDescription-CefyvJQY.js";import"./useUpdateEffect-DCJ4yyri.js";import"./useHasTabbableChild-CR4yKQe6.js";import"./chevron-down-Bns-FGnY.js";import"./Virtualizer-DN6bYi7r.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
