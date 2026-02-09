import{j as e}from"./iframe-BOj75HPM.js";import{$ as c}from"./Form-CWKKuFQR.js";import{G as d}from"./Grid-CoUD5N5I.js";import{G as i}from"./GridItem-B0VxPuOc.js";import{a as x,R as u}from"./Radio-Dh3abPrM.js";import{C as I}from"./CheckboxGroup-D5L3pXM_.js";import{C as G}from"./Checkbox-COwFsKdb.js";import{T as t}from"./TextField-D-fhsPss.js";import{S as l}from"./Select-CWoKs_W2.js";import{L as p}from"./ListBoxItem-B8LdPSwd.js";import{B as a}from"./Button-CG3q9yng.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DiwTvY5r.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CR9InUTF.js";import"./useFocusRing-BvD21wMG.js";import"./index-tbjRw6nF.js";import"./index-DauoXUb-.js";import"./clsx-Ciqy0D92.js";import"./Group-CSaInhYh.js";import"./FieldError-Dn9sUL3A.js";import"./Text-KcBRsMfX.js";import"./Text-y5UsFp3a.js";import"./Button-D1stJH9t.js";import"./Hidden-DX_ysAyq.js";import"./useLabels-BszWTWtA.js";import"./useButton-rMDDSnSZ.js";import"./SelectionIndicator-BJEhgAnj.js";import"./useField-Dj0XVRBs.js";import"./VisuallyHidden-DRoRIbBJ.js";import"./useControlledState-7gBIOf2A.js";import"./Label-CSDBl07K.js";import"./Dialog-Bzd92NLg.js";import"./RSPContexts-Dd30z721.js";import"./OverlayArrow-CdSn3l12.js";import"./useResizeObserver-B0Vk_8hR.js";import"./Collection-C9umSaxr.js";import"./index-CPEUDevc.js";import"./Separator-Bo63Wbjo.js";import"./SelectionManager-DKvFADB7.js";import"./useEvent-CEhlIHx6.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CWm0ggy2.js";import"./ListKeyboardDelegate-BswjCwMk.js";import"./PressResponder-Il8IXh95.js";import"./useLocalizedStringFormatter-C6wF7Mfo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-aYlr6XzC.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-B86JywTt.js";import"./x-DHOL_7dr.js";import"./createLucideIcon-BmLW6X-c.js";import"./useLocalizedStringFormatter-iBqt7kI1.js";import"./Heading-j4po0ei9.js";import"./info-Dn4DwaoR.js";import"./Popover-DTMgA__S.js";import"./check-BHG7kA68.js";import"./useToggleState-CDTDeBh8.js";import"./TextFieldBase-_OpCBAIu.js";import"./TextField-DzZsbjCQ.js";import"./Input-DSUuqs6g.js";import"./useTextField-6X4K6aCh.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B1rs6_l2.js";import"./DragAndDrop-CDwym_BN.js";import"./inertValue-DohUZGKu.js";import"./useListState-C6C1kXl5.js";import"./Tag-BGDCfZUJ.js";import"./useHighlightSelectionDescription-CuFAy-_u.js";import"./useUpdateEffect-B87Bnv_d.js";import"./useHasTabbableChild-dpWZ9tWL.js";import"./chevron-down-F7meJwAR.js";import"./Virtualizer-CKunbGs9.js";import"./Button.module-Co5e5YHp.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ke=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Ke as __namedExportsOrder,ye as default};
