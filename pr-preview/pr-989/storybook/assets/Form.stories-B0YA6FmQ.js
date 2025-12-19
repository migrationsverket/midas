import{j as e}from"./iframe-Cjj-T_WN.js";import{$ as c}from"./Form-aaRRhaPK.js";import{G as d}from"./Grid-CyIo47Zj.js";import{G as i}from"./GridItem-BCY4-SiF.js";import{T as t}from"./TextField-jQcw6Vh8.js";import{S as l}from"./Select-CzTchNJV.js";import{B as a}from"./Button-BCd8eFMO.js";import{R as x,a as u}from"./Radio-B8oyXzCG.js";import{C as I}from"./CheckboxGroup-DwKsWujZ.js";import{C as G}from"./Checkbox-_sGQrm3h.js";import{L as p}from"./ListBoxItem-B2HZknv8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CcLbDqYB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CNZdG7U3.js";import"./useFocusRing-CwecGSw4.js";import"./index-ky7TdNXS.js";import"./index-CxmudArT.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D9vCJXrE.js";import"./TextField-sv1Z5RZf.js";import"./FieldError-DCk6hMOV.js";import"./Text-DGl_bXVg.js";import"./Text-gU00Swsd.js";import"./RSPContexts-CEwT9ion.js";import"./Group-COEzFV3B.js";import"./Input-m6rc_Cus.js";import"./Hidden-tOizJ85m.js";import"./Button-DS8btNoB.js";import"./useLabels-DXBe3XOZ.js";import"./useButton-CHP-KyDJ.js";import"./useTextField-C-D9ILuq.js";import"./useControlledState-Cm5wADKy.js";import"./useField-DFPpGYGR.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BDhh5IK7.js";import"./Dialog-BlRqOkpt.js";import"./OverlayArrow-DFhFZFgc.js";import"./useResizeObserver-uQ4tqF06.js";import"./Collection-Bc46YrZb.js";import"./index-Bjzp8_a7.js";import"./Separator-sOO9Xwjo.js";import"./SelectionManager-BbkXqqxC.js";import"./useEvent-BUMkRfC-.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CxcJoXpo.js";import"./useDescription-CG2NFrQv.js";import"./ListKeyboardDelegate-CHt1YSD7.js";import"./PressResponder-ChZ-4Ka6.js";import"./useLocalizedStringFormatter-GQWeNoaA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D64_Qquw.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CQopoBEp.js";import"./x-9sVUTFG0.js";import"./createLucideIcon-DY10d_On.js";import"./useLocalizedStringFormatter-Cqkyr2UN.js";import"./Heading-CC8Cq5su.js";import"./info-UmHw-h3B.js";import"./Popover-BS6rHAhu.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CeVSOKUn.js";import"./DragAndDrop-Cq79J4KZ.js";import"./inertValue-CxH7yi2-.js";import"./useListState-Wb0Kt7OQ.js";import"./Tag-Dx7CI3zy.js";import"./useHighlightSelectionDescription-BpUWLHBj.js";import"./useUpdateEffect-CFpjDM-O.js";import"./useHasTabbableChild-B8KR6JeR.js";import"./chevron-down-Cjlcq5Wy.js";import"./Button.module-Co5e5YHp.js";import"./check-BbdYmTYP.js";import"./useToggleState-B_YhhmIu.js";import"./Virtualizer-Bxi261av.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
