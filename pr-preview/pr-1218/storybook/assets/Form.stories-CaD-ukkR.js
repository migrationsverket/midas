import{j as e}from"./iframe-ByTr7nlQ.js";import{c}from"./Form-Ba-xR42s.js";import{G as d}from"./Grid-CgjwlqHB.js";import{G as i}from"./GridItem-4tBcUJB5.js";import{a as x,R as u}from"./Radio-C9b8lIWT.js";import{C as I}from"./CheckboxGroup-ifaetTNY.js";import{C as G}from"./Checkbox-CB33pnLT.js";import{T as t}from"./TextField-Bj36L49m.js";import{S as l}from"./Select-oV-F1kDy.js";import{L as p}from"./ListBoxItem-CEE4jrk_.js";import{B as a}from"./Button-CH4Ce674.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BjdQLYQY.js";import"./utils-BtbeVzab.js";import"./clsx-B-dksMZM.js";import"./index-tkq_ZtSc.js";import"./index-BqV0DkUs.js";import"./clsx-Ciqy0D92.js";import"./Group-6zTvAcDv.js";import"./FieldError-B_MaF9By.js";import"./Text-B83XfqSN.js";import"./Text-dWwsRFEm.js";import"./Button-BSq_-Fzo.js";import"./Hidden-BuUimY0Q.js";import"./useLabel-Dw4tdRRI.js";import"./useLabels-BssvX8bv.js";import"./useButton-CMclMGMy.js";import"./SelectionIndicator-CWCU-OCj.js";import"./useField-Btp5d6yU.js";import"./VisuallyHidden-jMWhN52g.js";import"./useControlledState-B7X5e3Qm.js";import"./Label-DUoG80sH.js";import"./Dialog-CmDz57iQ.js";import"./RSPContexts-6m7Yijnj.js";import"./OverlayArrow-aoL4Lob6.js";import"./useResizeObserver-0Bwlgc9L.js";import"./Collection-Baidu9Hh.js";import"./index-CwxHN_b1.js";import"./Separator-B9Phou08.js";import"./SelectionManager-Ce3snNdv.js";import"./useEvent-DM7MuSEq.js";import"./scrollIntoView-1sk2wFtb.js";import"./useDescription-DLDUSAjo.js";import"./ListKeyboardDelegate-CCfv3Pud.js";import"./PressResponder-x5xHUhIy.js";import"./useLocalizedStringFormatter-ByBwQZl0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BXN9_r3c.js";import"./getScrollParent-C2971BjC.js";import"./Modal-BnSP1vtb.js";import"./x-CTnfdq1Z.js";import"./createLucideIcon-hQqGcF6U.js";import"./useLocalizedStringFormatter-B9QStVrX.js";import"./Heading-BOOm_FoR.js";import"./info-D4Wt3czt.js";import"./Popover-BDDjayej.js";import"./check-WiWXAt0f.js";import"./useToggleState-UQCg10Ui.js";import"./TextFieldBase-cJAVxEAh.js";import"./Input-Bex5Ft88.js";import"./useTextField-CrbrMX8I.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DF38TCKW.js";import"./DragAndDrop-koMEwqeC.js";import"./inertValue-CyBNVPAE.js";import"./useListState-DKJlDMVS.js";import"./TagGroup-DNl_dQ91.js";import"./useHighlightSelectionDescription-Buz0Jozm.js";import"./useUpdateEffect-B484aGL4.js";import"./useHasTabbableChild-CR34Nh1k.js";import"./chevron-down-gyLVAweX.js";import"./Virtualizer-BQFNjV-y.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
