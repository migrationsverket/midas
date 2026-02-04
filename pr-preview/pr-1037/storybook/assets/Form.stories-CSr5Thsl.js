import{j as e}from"./iframe-AzeRMI6E.js";import{$ as c}from"./Form-Cpd_U7HJ.js";import{G as d}from"./Grid-BcRN8nWA.js";import{G as i}from"./GridItem-xFJRyvja.js";import{a as x,R as u}from"./Radio-NXtPPNGw.js";import{C as I}from"./CheckboxGroup-BnQA0JKb.js";import{C as G}from"./Checkbox-CLsWoWFm.js";import{T as t}from"./TextField-DwXmDQPX.js";import{S as l}from"./Select-BA5C8CyK.js";import{L as p}from"./ListBoxItem-Cu1KzGA9.js";import{B as a}from"./Button-Dymh8tI2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C6Ogk0cQ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Fw-45rMv.js";import"./useFocusRing-IRQc2pc2.js";import"./index-6ebY7xVy.js";import"./index-BUDprfFK.js";import"./clsx-Ciqy0D92.js";import"./Group-DHQGRHxT.js";import"./FieldError-Bhumxp-K.js";import"./Text-DifqYix-.js";import"./Text-CgQK_TBj.js";import"./Button-BM_9r6cn.js";import"./Hidden-DlywG7Qa.js";import"./useLabels-CKRjxM8h.js";import"./useButton-F4pMDae2.js";import"./SelectionIndicator-B0GlzpJ_.js";import"./useField-BOUewxY-.js";import"./VisuallyHidden-Cdl-x6Ak.js";import"./useControlledState-KwKgHDy1.js";import"./Label-CsHKhuPA.js";import"./Dialog-8UUQmDqb.js";import"./RSPContexts-zi7bfW4c.js";import"./OverlayArrow-DnyVe5Yt.js";import"./useResizeObserver-ClCLhwuI.js";import"./Collection-CDhyUV2N.js";import"./index-d-6dDUYh.js";import"./Separator-yNfoQZtW.js";import"./SelectionManager-uTGJdGpQ.js";import"./useEvent-hvkR2q06.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DaNElkfk.js";import"./ListKeyboardDelegate--oU5vUq4.js";import"./PressResponder-DByLmu6r.js";import"./useLocalizedStringFormatter-C14yyg5V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D8nb0CDz.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CXoFC9Eh.js";import"./createLucideIcon-Cbaqp_e4.js";import"./useLocalizedStringFormatter-D3Cc5nzM.js";import"./Heading-CKa78Z7t.js";import"./info-CjOPVPlC.js";import"./Popover-P4PXPuEU.js";import"./check-BRDl3HLR.js";import"./useToggleState-CFze852B.js";import"./TextFieldBase-B9DFWzF1.js";import"./TextField-DGkasBkN.js";import"./Input-N0X16INo.js";import"./useTextField-BxMcuNOz.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BjdA1X7d.js";import"./DragAndDrop-C7FlXx1A.js";import"./inertValue-DFB6_a91.js";import"./useListState-BFHC5HdN.js";import"./Tag-DA3zeBLS.js";import"./useHighlightSelectionDescription-BMLYq7jB.js";import"./useUpdateEffect-Cud6yC-G.js";import"./useHasTabbableChild-RhP65RWQ.js";import"./chevron-down-DtvKal_v.js";import"./Virtualizer-NiST0lQA.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
