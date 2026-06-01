import{j as e}from"./iframe-t17oHKP1.js";import{c}from"./Form-DCT3rcma.js";import{G as d}from"./Grid-DWuLtRbP.js";import{G as i}from"./GridItem-CJVNwnw_.js";import{a as x,R as u}from"./Radio-iNsxahGw.js";import{C as I}from"./CheckboxGroup-DbapyKJm.js";import{C as G}from"./Checkbox-Ca-19YBE.js";import{T as t}from"./TextField-Dfn_kc9C.js";import{S as l}from"./Select-DnZfhQCQ.js";import{L as p}from"./ListBoxItem-Dfg-M4Vb.js";import{B as a}from"./Button-DBP_DFRF.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-B8_h5nqb.js";import"./utils-WfSaqPxO.js";import"./clsx-B-dksMZM.js";import"./index-CGLwXwU8.js";import"./index-Vs6o5933.js";import"./clsx-Ciqy0D92.js";import"./Group-XT1qdx_4.js";import"./FieldError-CjrPC_pn.js";import"./Text-B1toI6NE.js";import"./Text-BBzd2BqN.js";import"./Button-ofA_m75k.js";import"./Hidden-XqahJ4vg.js";import"./useLabel-CVs4fZyR.js";import"./useLabels-Bv9txMFS.js";import"./useButton-CKC-NCyU.js";import"./SelectionIndicator-C3QJbXC7.js";import"./useField-BAqScliG.js";import"./VisuallyHidden-CHb87xmq.js";import"./useControlledState-CSsGgKlE.js";import"./Label-BaMC1zUi.js";import"./Dialog-C_pUAPT4.js";import"./RSPContexts-1krLgbtl.js";import"./OverlayArrow-C8bch5Dq.js";import"./useResizeObserver-iavVuTSL.js";import"./Collection-C_sAio25.js";import"./index-Bk8TkxO4.js";import"./Separator-BTz2ELDx.js";import"./SelectionManager-B2XzSJwl.js";import"./useEvent-BXp6EVoR.js";import"./scrollIntoView-CjKzLxJO.js";import"./useDescription-DyoYJd2V.js";import"./ListKeyboardDelegate-CMyLAMym.js";import"./PressResponder-Cn5hz31u.js";import"./useLocalizedStringFormatter-BD3aVe4g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DKBecmXF.js";import"./getScrollParent-KRPDa9Jf.js";import"./ModalOverlay-DiGcUtOF.js";import"./x-B3d1tz_Z.js";import"./createLucideIcon-Bh202RVf.js";import"./useLocalizedStringFormatter-B413oFZi.js";import"./Heading-CRmlVJHe.js";import"./info-Co7s_Gt2.js";import"./Popover-B5ZckgCp.js";import"./check-BgXej_r8.js";import"./useToggleState-C3TVuh9i.js";import"./TextFieldBase-Bc4rbeQD.js";import"./Input-DvaOvy8x.js";import"./useTextField-q8zM5BBj.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-ZsonamnC.js";import"./DragAndDrop-C4E3063k.js";import"./inertValue-B_lDOBhu.js";import"./useListState-BJYDsAPK.js";import"./TagGroup-CuNzlJoc.js";import"./useHighlightSelectionDescription-ClPWXGG8.js";import"./useUpdateEffect-B9sfrpef.js";import"./useHasTabbableChild-DCD3awMU.js";import"./chevron-down-htL-YJ9D.js";import"./Virtualizer-BNdQxLk2.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
