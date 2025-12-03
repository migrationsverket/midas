import{j as e}from"./iframe-DAWhaW2t.js";import{$ as c}from"./Form-B0ZxuZFK.js";import{G as d}from"./Grid-BrluyE-y.js";import{G as i}from"./GridItem-DwsWbywe.js";import{T as t}from"./TextField-DytwmJxH.js";import{S as l}from"./Select-CXKUz_Ll.js";import{B as a}from"./Button-B_JidUJl.js";import{R as x,a as u}from"./Radio-C-HEt-fK.js";import{C as I}from"./CheckboxGroup-BfQOgeJs.js";import{C as G}from"./Checkbox-Dq-iOWKu.js";import{L as p}from"./ListBoxItem-ly7AIj9c.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BR5sLtXt.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DvW8pyhT.js";import"./useFocusRing-BovWNloU.js";import"./index-D684xh88.js";import"./index-domxwQpS.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DxA5FX4H.js";import"./TextField-DaiTrnUj.js";import"./FieldError-Ba9bdy0b.js";import"./Text-D2IArQsC.js";import"./Text-CgRVAj4B.js";import"./RSPContexts-CAzvZUzf.js";import"./Group-BnbaiT3j.js";import"./Input-BX5vuXOM.js";import"./Hidden-B7a6sUEi.js";import"./Button-B8FC0WHw.js";import"./useLabels-CwJrZ3kb.js";import"./useButton-Df4qwn4n.js";import"./useTextField-DLzrNh7c.js";import"./useControlledState-y8wjQEhG.js";import"./useField-DSvnQz-g.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-cXH1BtTt.js";import"./Dialog-D7IhSSCS.js";import"./OverlayArrow-DTlGkn-r.js";import"./useResizeObserver-CRTqY8le.js";import"./Collection-C1NcBIdQ.js";import"./index-BBuRyoIs.js";import"./Separator-CJccQN9g.js";import"./SelectionManager-Ct_s9VeM.js";import"./useEvent-CayB1s0N.js";import"./scrollIntoView-BWTP8Mlk.js";import"./SelectionIndicator-DzeJSSXw.js";import"./useDescription-BQlYcHFl.js";import"./ListKeyboardDelegate-D6_gwslt.js";import"./PressResponder-tovDBpy9.js";import"./useLocalizedStringFormatter-Bud54IOx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Ciw6Mddl.js";import"./VisuallyHidden-z0IVTDH3.js";import"./x-GRNLuSgY.js";import"./createLucideIcon-DPsPtM0A.js";import"./useLocalizedStringFormatter-DGsrEw_W.js";import"./Heading-0ZDi0Y6q.js";import"./info-BFF3jV6F.js";import"./Popover-DUZiWOye.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DbKfFyrG.js";import"./DragAndDrop-COyFDlbT.js";import"./inertValue-BzLe_Bc2.js";import"./useListState-B6FqxJnY.js";import"./Tag-CVMi15Xm.js";import"./useHighlightSelectionDescription-Cg7Za_6W.js";import"./useUpdateEffect-DD4IM7yW.js";import"./useHasTabbableChild-B9XKIUoy.js";import"./chevron-down-BHmvAEix.js";import"./Button.module-Co5e5YHp.js";import"./check-Bm6PQ2ja.js";import"./useToggleState-D5Ps2kOS.js";import"./Virtualizer-DXtBQfnk.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
