import{j as e}from"./iframe-D2u6fcmC.js";import{$ as c}from"./Form-BkApyaNb.js";import{G as d}from"./Grid-MKTEq-pD.js";import{G as i}from"./GridItem-Dj8hF4n0.js";import{a as x,R as u}from"./Radio-CWt1X0Mr.js";import{C as I}from"./CheckboxGroup-CWWsT6Lg.js";import{C as G}from"./Checkbox-1IWndNX3.js";import{T as t}from"./TextField-oyBhkG2B.js";import{S as l}from"./Select-BU2lbt5r.js";import{L as p}from"./ListBoxItem-Bk5QhGlm.js";import{B as a}from"./Button-D7MCEwkf.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CiNycYhM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BmH9m2e6.js";import"./useFocusRing-CavRUvhE.js";import"./index-1mTxR35t.js";import"./index-T3sg1FKY.js";import"./clsx-Ciqy0D92.js";import"./Group-DKSqKZt_.js";import"./FieldError-yn2RLFgz.js";import"./Text-BiuO3ebU.js";import"./Text-D2yfXHQm.js";import"./Button-CpbQDwOR.js";import"./Hidden-DwkU7rJe.js";import"./useLabels-BtEDdJzZ.js";import"./useButton-B2yDlT2I.js";import"./SelectionIndicator-WPXK57P0.js";import"./useField-BoDQD0-h.js";import"./VisuallyHidden-DOAfwi1g.js";import"./useControlledState-CPfd4NNf.js";import"./Label-C1tUN1zf.js";import"./Dialog-WBDTRcb-.js";import"./RSPContexts-B_HQictA.js";import"./OverlayArrow-yzFTuuaK.js";import"./useResizeObserver-T_2pYgWM.js";import"./Collection-_v5SZyfe.js";import"./index-Ds4jLS63.js";import"./Separator-DuJ7wd14.js";import"./SelectionManager-YmOe1LDC.js";import"./useEvent-cO724lZb.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-OCo5BB3K.js";import"./ListKeyboardDelegate-PoRIzH4i.js";import"./PressResponder-D0nWQMZF.js";import"./useLocalizedStringFormatter-DFmOREZk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYBTfPKd.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-ByX5semR.js";import"./createLucideIcon-COpdxC33.js";import"./useLocalizedStringFormatter-C7M_lV_b.js";import"./Heading-C9499rs9.js";import"./info-BrhmZH8m.js";import"./Popover-eLAmnGns.js";import"./check-BI2YJtZy.js";import"./useToggleState-CEVy1j9j.js";import"./TextFieldBase-BW8N4t2K.js";import"./Input-CwE9y9IA.js";import"./useTextField-DKmwebjx.js";import"./TextField.module-Dhscz2t0.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BSvvOVzQ.js";import"./DragAndDrop-DO2whWD4.js";import"./inertValue-BGj4GePf.js";import"./useListState-Bqte-Osv.js";import"./TagGroup-BpKuYBvL.js";import"./useHighlightSelectionDescription-EJwaM5YM.js";import"./useUpdateEffect-BH21-UaH.js";import"./useHasTabbableChild-YG9n0bWL.js";import"./chevron-down-CmzBfmpr.js";import"./Virtualizer-CQDYvfyC.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
