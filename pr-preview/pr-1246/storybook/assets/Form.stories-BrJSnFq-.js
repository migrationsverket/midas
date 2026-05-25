import{j as e}from"./iframe-D9EwWE8M.js";import{c}from"./Form-R2R1TL4A.js";import{G as d}from"./Grid-CLsKWt5h.js";import{G as i}from"./GridItem-DOi1ivk4.js";import{a as x,R as u}from"./Radio-DE8h48lN.js";import{C as I}from"./CheckboxGroup-BYWaN6b9.js";import{C as G}from"./Checkbox-a2wlsgJl.js";import{T as t}from"./TextField-BW2x7jhB.js";import{S as l}from"./Select-1d2j201q.js";import{L as p}from"./ListBoxItem-i11ZxKfj.js";import{B as a}from"./Button-EDaj_92B.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BivnDFw5.js";import"./utils-VDmJlITu.js";import"./clsx-B-dksMZM.js";import"./index-DAH1O1Iu.js";import"./index-BR2as-GY.js";import"./clsx-Ciqy0D92.js";import"./Group-DY5AWnbs.js";import"./FieldError-BbtBJcYl.js";import"./Text-DTRaBlNQ.js";import"./Text-D4q9EFLH.js";import"./Button-T_q17eYt.js";import"./Hidden-BsKNJICf.js";import"./useLabel-Bss4QgXi.js";import"./useLabels-C5o1EFbo.js";import"./useButton-BXxscPHn.js";import"./SelectionIndicator-BCxJECYe.js";import"./useField-AuOq5rL1.js";import"./VisuallyHidden-D48zSaf7.js";import"./useControlledState-D4c56bPB.js";import"./Label-DAMpAuSq.js";import"./Dialog-CkopoPRc.js";import"./RSPContexts-BNUf7IyR.js";import"./OverlayArrow-CWRcvIlw.js";import"./useResizeObserver-C86hNgGZ.js";import"./Collection-DkbGTE8G.js";import"./index-BZtrve2X.js";import"./Separator-BchZp9hK.js";import"./SelectionManager-BEbr8vYA.js";import"./useEvent-DbELLyrS.js";import"./scrollIntoView-COj35Dws.js";import"./useDescription-C0gXCY7I.js";import"./ListKeyboardDelegate-DswhUtaR.js";import"./PressResponder-CmvIhPV4.js";import"./useLocalizedStringFormatter-Bshgwq-R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-tnsGfgn2.js";import"./getScrollParent-Bc3C6zu_.js";import"./ModalOverlay-dKprTcu_.js";import"./x-Cx3dk2Wl.js";import"./createLucideIcon-DiPE6Ful.js";import"./useLocalizedStringFormatter-C2YbnlKW.js";import"./Heading-Cc7e5DA7.js";import"./info-D5eQAm0J.js";import"./Popover-Cv4frh6G.js";import"./check-DgkYfv4o.js";import"./useToggleState-BYPn_yuM.js";import"./TextFieldBase-CSFrxcOX.js";import"./Input-CuTxManu.js";import"./useTextField-oEloXr52.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BUCE_RuU.js";import"./DragAndDrop-DFnCfOyY.js";import"./inertValue-DxzR19Up.js";import"./useListState-Hpg0YF_h.js";import"./TagGroup-CKiSU-GV.js";import"./useHighlightSelectionDescription-BKejgjFB.js";import"./useUpdateEffect-BHI_hYNU.js";import"./useHasTabbableChild-7NgriJRd.js";import"./chevron-down-RWuzVz_9.js";import"./Virtualizer-3bH0Zfpk.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
