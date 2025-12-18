import{j as e}from"./iframe-BQVZAmhX.js";import{$ as c}from"./Form-B41ZDlT2.js";import{G as d}from"./Grid-BsqgVu8Z.js";import{G as i}from"./GridItem-DqiWuH7J.js";import{T as t}from"./TextField-Cco1shPo.js";import{S as l}from"./Select-CE3gQ-8d.js";import{B as a}from"./Button-CFZ90YqT.js";import{R as x,a as u}from"./Radio-DAKE0lNn.js";import{C as I}from"./CheckboxGroup-CwPLD8kK.js";import{C as G}from"./Checkbox-CzUucJGY.js";import{L as p}from"./ListBoxItem-t1lPFsX0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DBGKxhvy.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DdOFiruI.js";import"./useFocusRing-CZ1ppHUm.js";import"./index-DhVWvG0v.js";import"./index-jPah0Wh4.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C5RK2Qlg.js";import"./TextField-DNDD1KLL.js";import"./FieldError-Dvo9z3NV.js";import"./Text-Cl7VN2WD.js";import"./Text-BDOgt3-X.js";import"./RSPContexts-cGmYjQmV.js";import"./Group-DfSjgxD6.js";import"./Input-B1Y3I32M.js";import"./Hidden-uNYSXgwc.js";import"./Button-DaQviGRz.js";import"./useLabels-C7gSAdoi.js";import"./useButton-BLpyZZ6H.js";import"./useTextField-Bwcqt1wj.js";import"./useControlledState-BzTnjfw8.js";import"./useField-CXEJuOSd.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CF2NRSGZ.js";import"./Dialog-BDiy--GU.js";import"./OverlayArrow-4ksf4kwc.js";import"./useResizeObserver-DsSDP_Tb.js";import"./Collection-diItfcvf.js";import"./index-N78jcChP.js";import"./Separator-BVGvLdtd.js";import"./SelectionManager-BPdPsoew.js";import"./useEvent-BA49tokg.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DiiBswTs.js";import"./useDescription-BP2VHTY6.js";import"./ListKeyboardDelegate-BuF3a5u0.js";import"./PressResponder-BLPZ0Rie.js";import"./useLocalizedStringFormatter-D1gRfOcs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-v-Lvarn9.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CKyjCtbn.js";import"./x-B89X9bd_.js";import"./createLucideIcon-BEZFPsZb.js";import"./useLocalizedStringFormatter-sLwEt4tr.js";import"./Heading-CExc05Da.js";import"./info-BRRNj8dv.js";import"./Popover--ysAXKcV.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DTQszupQ.js";import"./DragAndDrop-BExwuvIv.js";import"./inertValue-D_brZNKm.js";import"./useListState-DaUwRG_Y.js";import"./Tag-BcVfmCzT.js";import"./useHighlightSelectionDescription-BpzOD2qW.js";import"./useUpdateEffect-BgyRDdc0.js";import"./useHasTabbableChild-DysJITF2.js";import"./chevron-down-DAKzwWJ8.js";import"./Button.module-Co5e5YHp.js";import"./check-SQjBCchm.js";import"./useToggleState-ctf3huNm.js";import"./Virtualizer-DpEa_YAO.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
