import{j as e}from"./iframe-DchRICws.js";import{$ as c}from"./Form-Czp3e4Ki.js";import{G as d}from"./Grid-DWkIqDbZ.js";import{G as i}from"./GridItem-m1G0TCse.js";import{a as x,R as u}from"./Radio-Dpcadd8b.js";import{C as I}from"./CheckboxGroup-_uwFzWIy.js";import{C as G}from"./Checkbox-B2TtgMNT.js";import{T as t}from"./TextField-DbNbGh7w.js";import{S as l}from"./Select-CbBuNDI8.js";import{L as p}from"./ListBoxItem-Bpw9zSyZ.js";import{B as a}from"./Button-DN9SoO3n.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-p-d8MzGY.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CZuFw2Za.js";import"./useFocusRing-D1Td16IF.js";import"./index-CaTrEPTS.js";import"./index-HHGf-Rtd.js";import"./clsx-Ciqy0D92.js";import"./Group-Dm9AJLg6.js";import"./FieldError-BEscErj6.js";import"./Text-Dku__uq1.js";import"./Text-B_W1e8Lm.js";import"./Button-BZuMzazd.js";import"./Hidden-0A_8gJrB.js";import"./useLabels-CyoqPhmQ.js";import"./useButton-C2I_u9zB.js";import"./SelectionIndicator-DmPCdpGD.js";import"./useField-U-3ZRuwS.js";import"./VisuallyHidden-CsUUod50.js";import"./useControlledState-gODkUqSO.js";import"./Label-BAZlNKbV.js";import"./Dialog-ClvNWqLa.js";import"./RSPContexts-D7mJCwQj.js";import"./OverlayArrow-DubmhbKN.js";import"./useResizeObserver-C0iu6b-S.js";import"./Collection-BwFKrD0P.js";import"./index-JFsHF43l.js";import"./Separator-CTNV6czy.js";import"./SelectionManager-BfPFk-Bl.js";import"./useEvent-CMXGpGQb.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-C4pVQLvJ.js";import"./ListKeyboardDelegate-iIdfoFIy.js";import"./PressResponder-LesXuKWX.js";import"./useLocalizedStringFormatter-0XFtpg5d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D9V7Ga83.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CrPhzFF_.js";import"./createLucideIcon-BN7buoN8.js";import"./useLocalizedStringFormatter-CN3ZQ9-k.js";import"./Heading-Cf2LkfSs.js";import"./info-BB2q98FC.js";import"./Popover-C3VRc43s.js";import"./check-JEyeWAGV.js";import"./useToggleState-Da2XnX9-.js";import"./TextFieldBase-CiEyn03t.js";import"./TextField-CaFmoK7_.js";import"./Input-DrqfUCE1.js";import"./useTextField-XJyZQQlS.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-HulR5OTp.js";import"./DragAndDrop-DoWunKsV.js";import"./inertValue-CM95I9bw.js";import"./useListState-x6LLPppJ.js";import"./Tag-DKSZfHzI.js";import"./useHighlightSelectionDescription-BLsgE6vC.js";import"./useUpdateEffect-BfbYlnw-.js";import"./useHasTabbableChild-CL4hmX66.js";import"./chevron-down-CZjM_Wj3.js";import"./Virtualizer-B801rRkp.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
