import{j as e}from"./iframe-Ci13ld7O.js";import{$ as c}from"./Form-BgjGPFuC.js";import{G as d}from"./Grid-BnWB05aL.js";import{G as i}from"./GridItem-LLwlgeeX.js";import{T as t}from"./TextField-Cm-e-4BR.js";import{S as l}from"./Select-Dbhm8iUK.js";import{B as a}from"./Button-fdROVxmt.js";import{R as x,a as u}from"./Radio-UvIYOy8w.js";import{C as I}from"./CheckboxGroup-DB2tknmi.js";import{C as G}from"./Checkbox-7MG-6uPV.js";import{L as p}from"./ListBoxItem-ClCuvVyl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cd0LQrts.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-lyydmePw.js";import"./useFocusRing-DnhJhnzY.js";import"./index-yP8H7dy3.js";import"./index-7gUS6nb-.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CYoBRq0Z.js";import"./TextField-CafKGUPV.js";import"./FieldError-CNS2gCFK.js";import"./Text-BVmiYMQy.js";import"./Text-BPRonoR2.js";import"./RSPContexts-CFalA0-F.js";import"./Group-Copzji_A.js";import"./Input-Ds05aGdD.js";import"./Hidden-BWsE9twn.js";import"./Button-YvURXki4.js";import"./useLabels-BR_CPQ7_.js";import"./useButton-BJUfgxuB.js";import"./useTextField-DcnpuNkd.js";import"./useControlledState-BPjdf_b0.js";import"./useField-CG62_5pp.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CyjO9gbY.js";import"./Dialog-CepYnuLi.js";import"./OverlayArrow-C6lCqXBu.js";import"./useResizeObserver-J-bRjOGS.js";import"./Collection-CdINeEAb.js";import"./index-CQwP3ol2.js";import"./Separator-CHl0NPOa.js";import"./SelectionManager-D5qHVcdA.js";import"./useEvent-C4x00_RR.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D7GO9bBt.js";import"./useDescription-4N3M-fgK.js";import"./ListKeyboardDelegate-B417rgL2.js";import"./PressResponder-CkrDdV11.js";import"./useLocalizedStringFormatter-D47gSq9M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CBYeZb5I.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C1I07cqa.js";import"./x-CkflMYc7.js";import"./createLucideIcon-Bj58XDKs.js";import"./useLocalizedStringFormatter-Ys_jkXo3.js";import"./Heading-DYM89nr5.js";import"./info-dlDyX20E.js";import"./Popover-qyXGcSll.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DRDZC6Zd.js";import"./DragAndDrop-DPm7yRKx.js";import"./inertValue-dtY26x6u.js";import"./useListState-D1wzMPDh.js";import"./Tag-pttDGLCM.js";import"./useHighlightSelectionDescription-L4xzhFrP.js";import"./useUpdateEffect-DlSpsD90.js";import"./useHasTabbableChild-BnBXvy_V.js";import"./chevron-down-B46E2IWV.js";import"./Button.module-Co5e5YHp.js";import"./check-D9VBBJoR.js";import"./useToggleState-Ge7wqY3I.js";import"./Virtualizer-Cn0tZ9l0.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
