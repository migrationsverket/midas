import{j as e}from"./iframe-C6zRxPwt.js";import{c}from"./Form-PpHcZF8L.js";import{G as d}from"./Grid-e1L5yX_N.js";import{G as i}from"./GridItem-CD0Xrz--.js";import{a as x,R as u}from"./Radio-CiWihP6l.js";import{C as I}from"./CheckboxGroup-DUJXvWX3.js";import{C as G}from"./Checkbox-BB3obEzf.js";import{T as t}from"./TextField-DmjzMBxP.js";import{S as l}from"./Select-BB383r7T.js";import{L as p}from"./ListBoxItem-swN8w_PJ.js";import{B as a}from"./Button-DHMnWLGJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BPpPWTKG.js";import"./utils-BEZo77lv.js";import"./clsx-B-dksMZM.js";import"./index-iboGWBaX.js";import"./index-DnknE0l7.js";import"./clsx-Ciqy0D92.js";import"./Group-BQUgB0PV.js";import"./FieldError-CzljslfK.js";import"./Text-BdoBf6Jw.js";import"./Text-DJ32dSE7.js";import"./Button-C8Zk09p7.js";import"./Hidden-IUN1uUBY.js";import"./useLabel-ecSwuXG2.js";import"./useLabels-BCAoW4uD.js";import"./useButton-BrsN7x1k.js";import"./SelectionIndicator-B_zx6GlP.js";import"./useField-CUNsCkrM.js";import"./VisuallyHidden-9r_S3aDL.js";import"./useControlledState-BY6_m9cF.js";import"./Label-B4qiadPW.js";import"./Dialog-BOpzQ1MH.js";import"./RSPContexts-DPB_5Wnw.js";import"./OverlayArrow-DDfGMFSJ.js";import"./useResizeObserver-BPKQSG2Q.js";import"./Collection-CH3bxv8u.js";import"./index-BdieSrJG.js";import"./Separator-DqV_Oq0w.js";import"./SelectionManager-Idt-0Wa2.js";import"./useEvent-BvwOn5ub.js";import"./scrollIntoView-zTEWqLUD.js";import"./useDescription-D1QyVa4Z.js";import"./ListKeyboardDelegate-BmFgQiWl.js";import"./PressResponder-R2OLyqx9.js";import"./useLocalizedStringFormatter-D9_WmAaw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYiIYqDx.js";import"./getScrollParent-CSa9bUGq.js";import"./ModalOverlay-4wsF43EW.js";import"./x-Dji1ZwpV.js";import"./createLucideIcon-ANvKNx91.js";import"./useLocalizedStringFormatter-B15xbeUv.js";import"./Heading-CrgNBsxh.js";import"./info-BMmqubIS.js";import"./Popover-DLbKNTks.js";import"./check-bNi9RE9F.js";import"./useToggleState-BJaSXiO_.js";import"./TextFieldBase-jEjPj82s.js";import"./Input-cBzcpn5k.js";import"./useTextField-CGcSuHK2.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-jnREpW4k.js";import"./DragAndDrop-Cdj31rqx.js";import"./inertValue-CCRvj0By.js";import"./useListState-D7Qqurl6.js";import"./TagGroup-Bnq4aXvD.js";import"./useHighlightSelectionDescription-CMPObLFN.js";import"./useUpdateEffect-CNwPz1Jx.js";import"./useHasTabbableChild-7NYQavIF.js";import"./chevron-down-DYMwmli5.js";import"./Virtualizer-DjarWkvy.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
