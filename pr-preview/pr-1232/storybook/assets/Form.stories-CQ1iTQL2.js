import{j as e}from"./iframe-Cu_fcUaC.js";import{c}from"./Form-Cpr59noW.js";import{G as d}from"./Grid-CDH5PdoE.js";import{G as i}from"./GridItem-Dvnl0wNL.js";import{a as x,R as u}from"./Radio-BuULEufe.js";import{C as I}from"./CheckboxGroup-CXgkSiDb.js";import{C as G}from"./Checkbox-z3K_kshL.js";import{T as t}from"./TextField-FVt5Upzd.js";import{S as l}from"./Select-DwMt-wFb.js";import{L as p}from"./ListBoxItem-CgSMvGsS.js";import{B as a}from"./Button-DbgphF2R.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Dsj_Rw-j.js";import"./utils-mLyOZ5qk.js";import"./clsx-B-dksMZM.js";import"./index-BAEOZiyy.js";import"./index-YTo08owu.js";import"./clsx-Ciqy0D92.js";import"./Group-B_4MjRqC.js";import"./FieldError-CcL3qzc2.js";import"./Text-BcWcM5HD.js";import"./Text-CJt2oElV.js";import"./Button-BJB-9Zcd.js";import"./Hidden-D1QpNxPu.js";import"./useLabel-Bo-LBJ9U.js";import"./useLabels-DuVjw0gV.js";import"./useButton-DbfMgMWW.js";import"./SelectionIndicator-B3i_o2a7.js";import"./useField-Cl39vdxi.js";import"./VisuallyHidden-Bo9ouMME.js";import"./useControlledState-Cc2dWwpP.js";import"./Label-jnUzBQy1.js";import"./Dialog-C-EAIPxB.js";import"./RSPContexts-voJfQs_F.js";import"./OverlayArrow-DhYthxRu.js";import"./useResizeObserver-BN_fml5s.js";import"./Collection-DgS7LPNV.js";import"./index-Bd3BSiq8.js";import"./Separator-oct6uH29.js";import"./SelectionManager-CrVTf4E_.js";import"./useEvent-CwEPxrZU.js";import"./scrollIntoView-ACzs8MHU.js";import"./useDescription-BXNyutV1.js";import"./ListKeyboardDelegate-BaQ6if3w.js";import"./PressResponder-BV-_NXl-.js";import"./useLocalizedStringFormatter-DyfcmqRi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-YFYmKfCX.js";import"./getScrollParent-DEJhUy4G.js";import"./ModalOverlay-dJNPlfM6.js";import"./x-_aLctjLl.js";import"./createLucideIcon-B_FH30vd.js";import"./useLocalizedStringFormatter-Dtw-Zwnl.js";import"./Heading-11L4UqbI.js";import"./info-Coc9VrCX.js";import"./Popover-yTDjeowR.js";import"./check-BVAfz5sk.js";import"./useToggleState-CVKqooVN.js";import"./TextFieldBase-VHJvjhnQ.js";import"./Input-DXT2_3F3.js";import"./useTextField-D7XMH20H.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DSNkeFhu.js";import"./DragAndDrop-LWqhxrUY.js";import"./inertValue-Ci6B5Lro.js";import"./useListState-B3K9T4Ae.js";import"./TagGroup-6ptb-c_l.js";import"./useHighlightSelectionDescription-DZNau4tP.js";import"./useUpdateEffect-BBB-HEnP.js";import"./useHasTabbableChild-CCIMiXn9.js";import"./chevron-down-BQ3FKJNM.js";import"./Virtualizer-DIm6kopb.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
