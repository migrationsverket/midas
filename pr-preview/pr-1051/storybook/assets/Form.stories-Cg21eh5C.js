import{j as e}from"./iframe-Drr84aUp.js";import{$ as c}from"./Form-BeBEjZhh.js";import{G as d}from"./Grid-BUsQ2_r1.js";import{G as i}from"./GridItem-CPviEYol.js";import{a as x,R as u}from"./Radio-BI0w26LD.js";import{C as I}from"./CheckboxGroup-1VOtMuWV.js";import{C as G}from"./Checkbox-Cur7lHDo.js";import{T as t}from"./TextField-CNYVw11k.js";import{S as l}from"./Select-1IWmA9Y6.js";import{L as p}from"./ListBoxItem-Dz45Jnk4.js";import{B as a}from"./Button-BXBCvuas.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dj0d5knJ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D143NhVz.js";import"./useFocusRing-DsIGSL5O.js";import"./index-BiBbK_-6.js";import"./index-DRbaHGaR.js";import"./clsx-Ciqy0D92.js";import"./Group-BwyrbItK.js";import"./FieldError-799sXCos.js";import"./Text-Dr4vVF01.js";import"./Text-v7lTDwJ8.js";import"./Button-CwulGWpP.js";import"./Hidden-BeHVocu4.js";import"./useLabels-CW04P3B1.js";import"./useButton-ByV_k0-w.js";import"./SelectionIndicator-Daf2cBJU.js";import"./useField-DFKc8azI.js";import"./VisuallyHidden-BX3HTr1q.js";import"./useControlledState-ORv1HaqW.js";import"./Label-DSZEmFRx.js";import"./Dialog-D-wK_8vJ.js";import"./RSPContexts-SjihynDA.js";import"./OverlayArrow-C_klXK3L.js";import"./useResizeObserver-Cl3y_7ec.js";import"./Collection-DkshQO2P.js";import"./index-Cgdv7bIq.js";import"./Separator-C4C5YkOi.js";import"./SelectionManager-DMZwZ-vi.js";import"./useEvent-DtfVww8C.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DocMBm6g.js";import"./ListKeyboardDelegate-DiJbBaOx.js";import"./PressResponder-BSbggRNF.js";import"./useLocalizedStringFormatter-DKpj8BBI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-oaAe1ewT.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BaHWGiCm.js";import"./createLucideIcon-BYlUtrd2.js";import"./useLocalizedStringFormatter-DN0Qnrca.js";import"./Heading-DzifNSwV.js";import"./info-DhaZktHC.js";import"./Popover-DEn4VFUJ.js";import"./check-CG5JpCep.js";import"./useToggleState-CoBGO6Jx.js";import"./TextFieldBase-Dqly3Fq6.js";import"./TextField-DlNpw0Vb.js";import"./Input-BKlQYY1Y.js";import"./useTextField-CbABvNjY.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CgDFx6GF.js";import"./DragAndDrop-9lMV_lZ1.js";import"./inertValue-BsiEPn0K.js";import"./useListState-Dw247HVi.js";import"./Tag-CIj5TRGy.js";import"./useHighlightSelectionDescription-DR-mbBsG.js";import"./useUpdateEffect-BsBaxDMt.js";import"./useHasTabbableChild-C4rciiNo.js";import"./chevron-down-Bx5SYs2B.js";import"./Virtualizer-D4olagKq.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
