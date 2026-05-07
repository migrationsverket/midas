import{j as e}from"./iframe-DFebKffn.js";import{c}from"./Form-nCobm3CY.js";import{G as d}from"./Grid-DQM87R8d.js";import{G as i}from"./GridItem-Cr16-yqc.js";import{a as x,R as u}from"./Radio-BTxHV9X2.js";import{C as I}from"./CheckboxGroup-BOJ1inl5.js";import{C as G}from"./Checkbox-CyF2GAqA.js";import{T as t}from"./TextField-Cm9GHJhM.js";import{S as l}from"./Select-B5CukRSc.js";import{L as p}from"./ListBoxItem-22T35qzn.js";import{B as a}from"./Button-CAFfH1xQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-C3NPJWuR.js";import"./utils-J_OqfxpN.js";import"./clsx-B-dksMZM.js";import"./index-fFDBVBnh.js";import"./index-BJ2AWJ3X.js";import"./clsx-Ciqy0D92.js";import"./Group-DEOBuZSS.js";import"./FieldError-CqV6hYY3.js";import"./Text-jpnaKsAZ.js";import"./Text-B-BzwR12.js";import"./Button-BZDCT8jS.js";import"./Hidden-BATde4xQ.js";import"./useLabel-B8lMlR1q.js";import"./useLabels-C1qgN7Qm.js";import"./useButton-C0xusnOU.js";import"./SelectionIndicator-tE_LDChe.js";import"./useField-B521Xtuh.js";import"./VisuallyHidden-J2xwiqaN.js";import"./useControlledState-BBnpHgMO.js";import"./Label-AidT_L4c.js";import"./Dialog-BFOkpBwH.js";import"./RSPContexts-Cvf_UqQA.js";import"./OverlayArrow-CJmScTPI.js";import"./useResizeObserver-q0q4I5l9.js";import"./Collection-C3aJ_YG1.js";import"./index-WykGGTgN.js";import"./Separator-CcYLIB_G.js";import"./SelectionManager-DnvZe7fF.js";import"./useEvent-BefO7eCM.js";import"./scrollIntoView-Ay2HlXpl.js";import"./useDescription-1A7QrMbF.js";import"./ListKeyboardDelegate-CB2LXJR4.js";import"./PressResponder-x7TTwY6v.js";import"./useLocalizedStringFormatter-DT9MjXti.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CODwxVTq.js";import"./getScrollParent-C72LLC1f.js";import"./ModalOverlay-B-1_LG18.js";import"./x-udLSc6dJ.js";import"./createLucideIcon-eIhYDTFQ.js";import"./useLocalizedStringFormatter-1z23XCra.js";import"./Heading-CCEXH8UY.js";import"./info-De4eU8bo.js";import"./Popover-DLlLbIiU.js";import"./check-Gozdg3Kj.js";import"./useToggleState-BFgAcz0Q.js";import"./TextFieldBase-RIn0r_t_.js";import"./Input-YR7zVes6.js";import"./useTextField-CRtvC267.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C3SZRJSZ.js";import"./DragAndDrop-BDcZI7fZ.js";import"./inertValue-BkeMomRP.js";import"./useListState-bPKPczgf.js";import"./TagGroup-Bu8iH2yu.js";import"./useHighlightSelectionDescription-6GsFFKxT.js";import"./useUpdateEffect-DHNsqo72.js";import"./useHasTabbableChild-_rNCrkkn.js";import"./chevron-down-CBfhzdDM.js";import"./Virtualizer-CxM9jywj.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
