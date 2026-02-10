import{j as e}from"./iframe-xM6GPlxZ.js";import{$ as c}from"./Form-D-7e8gY8.js";import{G as d}from"./Grid-Df_bujBs.js";import{G as i}from"./GridItem-C-Qn3Lna.js";import{a as x,R as u}from"./Radio-BjSM5vqK.js";import{C as I}from"./CheckboxGroup-d8hHjkkP.js";import{C as G}from"./Checkbox-C1c9CqcC.js";import{T as t}from"./TextField-DGvKN5vp.js";import{S as l}from"./Select-vKoOMrOg.js";import{L as p}from"./ListBoxItem-D8ioFL9v.js";import{B as a}from"./Button-CKxI1r1_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BWmJmXij.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-6nG_QMyJ.js";import"./useFocusRing-QfzGUTUK.js";import"./index-Cg05t2G5.js";import"./index-DC2xKSlP.js";import"./clsx-Ciqy0D92.js";import"./Group-DswamWYx.js";import"./FieldError-CI525PUG.js";import"./Text-eaDz3eV1.js";import"./Text-CHMvJdTr.js";import"./Button-D0EwoScf.js";import"./Hidden-CNNVQzIs.js";import"./useLabels-C6Mi33Cz.js";import"./useButton-CI69bHTl.js";import"./SelectionIndicator-DUE9LE0r.js";import"./useField-DhjOGZIF.js";import"./VisuallyHidden-Ck-DDgGV.js";import"./useControlledState-C_N3S3lP.js";import"./Label-C0BfwsP2.js";import"./Dialog-DTsORP6i.js";import"./RSPContexts-CBBqJTPm.js";import"./OverlayArrow-C6VILOrM.js";import"./useResizeObserver-D2ClN3Ot.js";import"./Collection-DUrw-iXY.js";import"./index-q8a9In3r.js";import"./Separator-D6ficfAW.js";import"./SelectionManager-e2Kt43cd.js";import"./useEvent-D1PWkF_3.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DRbU8aXx.js";import"./ListKeyboardDelegate-BC8BrP6H.js";import"./PressResponder-BSgxSSHD.js";import"./useLocalizedStringFormatter-CX9bacHe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CbX6MLUB.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Bs38igXL.js";import"./createLucideIcon-D-PEwym-.js";import"./useLocalizedStringFormatter-CfPLxaXy.js";import"./Heading-wS7RUvpX.js";import"./info-Cb79Xs7I.js";import"./Popover-CgGrnuR1.js";import"./check-CwsgTExN.js";import"./useToggleState--oZM_I2S.js";import"./TextFieldBase-tf5Pj8Hd.js";import"./TextField-PGuwxeaP.js";import"./Input-B2CEylbx.js";import"./useTextField-JUSGFZfG.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-ChABODut.js";import"./DragAndDrop-CcdIMJiu.js";import"./inertValue-CqCUPGx1.js";import"./useListState-BOcVPJAN.js";import"./Tag-DzRvAiey.js";import"./useHighlightSelectionDescription-DyqD2a3o.js";import"./useUpdateEffect-QeeTLylW.js";import"./useHasTabbableChild-DFHSHK1C.js";import"./chevron-down-CLOc6Ryn.js";import"./Virtualizer-BVxee9kC.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
