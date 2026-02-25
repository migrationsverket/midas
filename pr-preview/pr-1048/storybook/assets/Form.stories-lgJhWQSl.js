import{j as e}from"./iframe-Bces5ReF.js";import{$ as c}from"./Form-DgaYtgkc.js";import{G as d}from"./Grid-CTZAMgA3.js";import{G as i}from"./GridItem-DUiwOvHN.js";import{a as x,R as u}from"./Radio-BVf2Aeum.js";import{C as I}from"./CheckboxGroup-D2YlMy-G.js";import{C as G}from"./Checkbox-D0-XrLav.js";import{T as t}from"./TextField-Bm_xNmLt.js";import{S as l}from"./Select-DDAJJUAP.js";import{L as p}from"./ListBoxItem-DcpW3hn3.js";import{B as a}from"./Button-CYRhppib.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-KBwZHkAa.js";import"./useObjectRef-Cb_4IuYU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DKvuYSK2.js";import"./useFocusRing-BbIVxAS-.js";import"./useFocusable-CCLwmwwj.js";import"./index-C3ONQ0hZ.js";import"./index-mmvsT4Yz.js";import"./clsx-Ciqy0D92.js";import"./Group-Bwq3o5kk.js";import"./FieldError-CoA192lt.js";import"./Text-BbgSNpRI.js";import"./Text-S43pSr6l.js";import"./Button-sx3D740K.js";import"./Hidden-HEj2_VP4.js";import"./number-DfkVkf0F.js";import"./useLabels-it0H97ln.js";import"./useButton-CFUJeSeD.js";import"./SelectionIndicator-R-3rkI9A.js";import"./useField-BnZ2w5LO.js";import"./VisuallyHidden-CplwDL_w.js";import"./useControlledState-DzHlTDkP.js";import"./Label-ZkIPGYUs.js";import"./Dialog-CEJryXss.js";import"./RSPContexts-KQSALUVI.js";import"./OverlayArrow-CJaqSD8r.js";import"./useResizeObserver-C8rFwvOL.js";import"./Collection-DTPpeXjN.js";import"./CollectionBuilder-DYUOvLcK.js";import"./index-eELsyXIA.js";import"./Separator-CZsB5Jtz.js";import"./SelectionManager-DnJZ1f0u.js";import"./useEvent-r8dTAAd3.js";import"./scrollIntoView-rsEwujUN.js";import"./useDescription-BDbgTMgy.js";import"./ListKeyboardDelegate-CZk_8FT1.js";import"./PressResponder-CzDZ9nEt.js";import"./useLocalizedStringFormatter-DvTA5UTi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BzzM05P-.js";import"./getScrollParent-CNLff4rP.js";import"./x-DUS_Kj0p.js";import"./createLucideIcon-B7hgpfhf.js";import"./useLocalizedStringFormatter-Bezv0VbS.js";import"./Heading-f7FHASBd.js";import"./info-D1apA-sK.js";import"./Popover-Cp2wtLc3.js";import"./check-DLQE9r_7.js";import"./useToggleState-Dea2DGGC.js";import"./TextFieldBase-Bi1H_olz.js";import"./Input-DvLxCnUH.js";import"./useTextField-Dz3HtiuY.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-wnnUZep3.js";import"./DragAndDrop-DHFQ2yjd.js";import"./inertValue-Day6WnGg.js";import"./useListState-WtTKHuzK.js";import"./TagGroup-Fq04Uqcb.js";import"./useHighlightSelectionDescription-DtmSatiH.js";import"./useUpdateEffect-D5BwVI9g.js";import"./useHasTabbableChild-i1OetJkl.js";import"./chevron-down-Dc3IDBmQ.js";import"./Virtualizer-CUrsvvN8.js";import"./Button.module-D_C6WeTN.js";const Oe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Pe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Pe as __namedExportsOrder,Oe as default};
