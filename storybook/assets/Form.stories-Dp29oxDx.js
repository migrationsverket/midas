import{j as e}from"./iframe-CHgot2X7.js";import{$ as c}from"./Form-Dni3IVjn.js";import{G as d}from"./Grid-CsH-I3xM.js";import{G as i}from"./GridItem-Cy-IfGDE.js";import{a as x,R as u}from"./Radio-mFbJvwOa.js";import{C as I}from"./CheckboxGroup-DzWkzUX_.js";import{C as G}from"./Checkbox-CDLrnTFR.js";import{T as t}from"./TextField-D_laxBVk.js";import{S as l}from"./Select-C4Oww5NX.js";import{L as p}from"./ListBoxItem-GYGIUalv.js";import{B as a}from"./Button-CgoLRGMY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DQgfFqY2.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-v3AvI7jc.js";import"./useFocusRing-DV-BAEmR.js";import"./index-CmxdV0gr.js";import"./index-BY5gyNOq.js";import"./clsx-Ciqy0D92.js";import"./Group-BFDb2F6m.js";import"./FieldError-BKJs5LOX.js";import"./Text-DCyFtYSi.js";import"./Text-CLrr9WjV.js";import"./Button-0zMY2rUc.js";import"./Hidden-CqaFLcD3.js";import"./useLabels-XlyeLMQd.js";import"./useButton-DTMPsQ98.js";import"./SelectionIndicator-BRFiO61M.js";import"./useField-BZRMc2W1.js";import"./VisuallyHidden-D0onDKtY.js";import"./useControlledState-CTq5bkOP.js";import"./Label-Nq3QbODP.js";import"./Dialog-CUraIqbN.js";import"./RSPContexts-BcdrHj2t.js";import"./OverlayArrow-BlvWBSeh.js";import"./useResizeObserver-BE1LSoK8.js";import"./Collection-De4nOpoc.js";import"./index-DGKLvn2p.js";import"./Separator-BF05vp7g.js";import"./SelectionManager-BXnldiX1.js";import"./useEvent-Bgs3fgM1.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cv6ZH6Jp.js";import"./ListKeyboardDelegate-6qlMLgr0.js";import"./PressResponder-3OYVW6WF.js";import"./useLocalizedStringFormatter-BwcUD0xm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BnQn-91c.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-C_oBXl7X.js";import"./createLucideIcon-Bs877ZR1.js";import"./useLocalizedStringFormatter-DCHR-uXl.js";import"./Heading-DzhgT2C8.js";import"./info-D9MU_BCS.js";import"./Popover-DVDzK7gp.js";import"./check-D7SmkhHv.js";import"./useToggleState-XRbwlK2I.js";import"./TextFieldBase-fmaYNFiR.js";import"./Input-BNLgcznl.js";import"./useTextField-C0Ajqqzx.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DB3BpYVl.js";import"./DragAndDrop-D_Tb6590.js";import"./inertValue-Jfb1CTGu.js";import"./useListState-CwrXmjU4.js";import"./TagGroup-BthJVkHI.js";import"./useHighlightSelectionDescription-Bhu4X7Gp.js";import"./useUpdateEffect-2lZDq6Xh.js";import"./useHasTabbableChild-C7nNbCzd.js";import"./chevron-down-B23SzKQD.js";import"./Virtualizer-D7hAsYxE.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
