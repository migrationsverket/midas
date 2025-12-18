import{j as e}from"./iframe-5gY8uiZp.js";import{$ as c}from"./Form-D863ir3x.js";import{G as d}from"./Grid-BES8sHT9.js";import{G as i}from"./GridItem-DJnzMUFj.js";import{T as t}from"./TextField-mkuaDNDK.js";import{S as l}from"./Select-BgBMmner.js";import{B as a}from"./Button-VUiFd7fg.js";import{R as x,a as u}from"./Radio-C5l2JNPW.js";import{C as I}from"./CheckboxGroup-DBphiDKi.js";import{C as G}from"./Checkbox-CBD4Z9x2.js";import{L as p}from"./ListBoxItem-CpiovyTc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DECZjV3X.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-15BdVQVt.js";import"./useFocusRing-Boel07eM.js";import"./index-TGVZlA7L.js";import"./index-CLK4xEXj.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-mwJRwxUP.js";import"./TextField-77v4TWyy.js";import"./FieldError-Cj22ksHa.js";import"./Text-DX1n20pB.js";import"./Text-C5V7OBlJ.js";import"./RSPContexts-B5FLXJGX.js";import"./Group-C7P4wTCw.js";import"./Input-DWjveu92.js";import"./Hidden-CJ0_VQq2.js";import"./Button-CTvN5iBJ.js";import"./useLabels-Di96fV3Q.js";import"./useButton-4X48dbK-.js";import"./useTextField-B7b4wiTP.js";import"./useControlledState-D5A6R61M.js";import"./useField-D1C0IxMP.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dw9DWsMU.js";import"./Dialog-D_ZI3bEp.js";import"./OverlayArrow-Br5tT-gW.js";import"./useResizeObserver-D3WtM-cD.js";import"./Collection-sT0T17lb.js";import"./index-B5Ph--6G.js";import"./Separator-BifO5n1N.js";import"./SelectionManager-Dewgj96Z.js";import"./useEvent-DxUtadp_.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dwnht8Fn.js";import"./useDescription-07SEN0Vw.js";import"./ListKeyboardDelegate-DaE3jdMq.js";import"./PressResponder-U6d0dn2T.js";import"./useLocalizedStringFormatter-DZ0rZsWI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DckjZn6o.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CoBV_pcx.js";import"./x-BqJtwxOC.js";import"./createLucideIcon-B1QC88uT.js";import"./useLocalizedStringFormatter-_Dnj8gb8.js";import"./Heading-ftpgvw5S.js";import"./info-COZxM15j.js";import"./Popover-CV2sNt58.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C92eTpJT.js";import"./DragAndDrop-OzkQTzbm.js";import"./inertValue-C151JMOu.js";import"./useListState-CvBDo9QM.js";import"./Tag-nRICFntT.js";import"./useHighlightSelectionDescription-D4v6h6kk.js";import"./useUpdateEffect-DfoKivfl.js";import"./useHasTabbableChild-C2zJBUvF.js";import"./chevron-down-DwtRS8VI.js";import"./Button.module-Co5e5YHp.js";import"./check-BF0j-h-l.js";import"./useToggleState-DFs2CSmr.js";import"./Virtualizer-DyG4deLc.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
