import{j as e}from"./iframe-D3lvYj-7.js";import{c}from"./Form-4L_iZXM_.js";import{G as d}from"./Grid-IUOzcraS.js";import{G as i}from"./GridItem-BR0U1pGc.js";import{a as x,R as u}from"./Radio-BGdWhXDV.js";import{C as I}from"./CheckboxGroup-Jhl1eU9J.js";import{C as G}from"./Checkbox-CODgiQs2.js";import{T as t}from"./TextField-Dmns0XYf.js";import{S as l}from"./Select-74dI9-8g.js";import{L as p}from"./ListBoxItem-BMZaRCa4.js";import{B as a}from"./Button-DrsIbXth.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DIwykGm6.js";import"./utils-B6k7vEYH.js";import"./clsx-B-dksMZM.js";import"./index-BM1vPyr1.js";import"./index-DIXJvTpR.js";import"./clsx-Ciqy0D92.js";import"./Group-BBq_h1pv.js";import"./FieldError-BIzYN5TD.js";import"./Text-DdkQbCnP.js";import"./Text-CEj93Me_.js";import"./Button-DOFXZV3V.js";import"./Hidden-DPjLOd6z.js";import"./useLabel-Pnrma__y.js";import"./useLabels-CJIv4d2A.js";import"./useButton-Dbna9MqX.js";import"./SelectionIndicator-DcD7m-kE.js";import"./useField-Cs7O-1i7.js";import"./VisuallyHidden-a__j3MRh.js";import"./useControlledState-D5Ejjxkh.js";import"./Label-DR3DQmcv.js";import"./Dialog-BhoDjDhE.js";import"./RSPContexts-D64MNSpQ.js";import"./OverlayArrow-D08GPqyx.js";import"./useResizeObserver-DWc854Wm.js";import"./Collection-BOvFszMS.js";import"./index-B85edBw8.js";import"./Separator-C9eIsOXD.js";import"./SelectionManager-CfXrYRZg.js";import"./useEvent-oTCry49G.js";import"./scrollIntoView-DNnNX0kR.js";import"./useDescription-CYl_TCbf.js";import"./ListKeyboardDelegate-CnmqKvjx.js";import"./PressResponder-D45eMs9g.js";import"./useLocalizedStringFormatter-ZyPAj94C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-9T1riTjI.js";import"./getScrollParent-D1A9VXvD.js";import"./ModalOverlay-DN9M3plR.js";import"./x-MTUjWktr.js";import"./createLucideIcon-C2BZ0Xjj.js";import"./useLocalizedStringFormatter-Dn72RgHJ.js";import"./Heading-CFWUW695.js";import"./info-CKobJxoa.js";import"./Popover-BhvFH6Nh.js";import"./check-Bx_aZw_E.js";import"./useToggleState-pz6SXR7Y.js";import"./TextFieldBase-CSMOvxl4.js";import"./Input-VS8Iv2KC.js";import"./useTextField-CxvlnZhk.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-kZmgeFKI.js";import"./DragAndDrop-DnNtPCqa.js";import"./inertValue-CKZPUubI.js";import"./useListState-Bbub-zlX.js";import"./TagGroup-CurfRB4M.js";import"./useHighlightSelectionDescription-CoFNx0bp.js";import"./useUpdateEffect-DCYzTRMy.js";import"./useHasTabbableChild-DG9ySRJ8.js";import"./chevron-down-9vIYws7h.js";import"./Virtualizer-CXF41TLM.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
