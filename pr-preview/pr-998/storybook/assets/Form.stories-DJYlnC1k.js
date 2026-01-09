import{j as e}from"./iframe-DM_HNK6K.js";import{$ as c}from"./Form-C0kUAQcP.js";import{G as d}from"./Grid-CGV_wR4Q.js";import{G as i}from"./GridItem-Cii6Tr-P.js";import{T as t}from"./TextField-DIxfVTKg.js";import{S as l}from"./Select-b_jsinTR.js";import{B as a}from"./Button-Hxka-VYw.js";import{R as x,a as u}from"./Radio-0KEHADmb.js";import{C as I}from"./CheckboxGroup-BQsqJpkn.js";import{C as G}from"./Checkbox-CyCS3xdz.js";import{L as p}from"./ListBoxItem-10odcdjz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BrnuSJ1-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CRZRQtSn.js";import"./useFocusRing-Dh1RhkUQ.js";import"./index-Dn5q0CGw.js";import"./index-DbczpIcn.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CqMZUtUX.js";import"./TextField-faV5BBpt.js";import"./FieldError-Bkja58-g.js";import"./Text-ClUc-h5K.js";import"./Text-DJJ4vhAg.js";import"./RSPContexts-DZ1TGWQo.js";import"./Group-BYMT47Rc.js";import"./Input-C2_kuM08.js";import"./Hidden-CaMcuicU.js";import"./Button-ExABwgM4.js";import"./useLabels-CvROpDKQ.js";import"./useButton-aRK5nu44.js";import"./useTextField-DA3pBNBV.js";import"./useControlledState-DKYWtKkY.js";import"./useField-Aw6Lq2ji.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BszXdQtI.js";import"./Dialog-r9mginhE.js";import"./OverlayArrow-683XZ0gQ.js";import"./useResizeObserver-qqMQ1oti.js";import"./Collection-BOowsvXY.js";import"./index-D10AwL2b.js";import"./Separator-DlkC4zR8.js";import"./SelectionManager-D8tPvRiP.js";import"./useEvent-CHMmmgOy.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BPhi3N2D.js";import"./useDescription-BZWTwB3o.js";import"./ListKeyboardDelegate-DWuOe_GH.js";import"./PressResponder-DNbJzU0f.js";import"./useLocalizedStringFormatter-dQ_9X6cS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BIeWPZVf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-AtXRcW43.js";import"./x-Do2AzdKO.js";import"./createLucideIcon-BtlDpUqt.js";import"./useLocalizedStringFormatter-CfWcX_0m.js";import"./Heading-C596kiRQ.js";import"./info-BnCYBS_N.js";import"./Popover-CYLdM0iy.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Y6XUJJHn.js";import"./DragAndDrop-BaHF8Zqq.js";import"./inertValue-DDIrx47f.js";import"./useListState-BNn9nJrX.js";import"./Tag-DS2WQVvX.js";import"./useHighlightSelectionDescription-C6fVR1rR.js";import"./useUpdateEffect-bNslNRQW.js";import"./useHasTabbableChild-BzAh5zn8.js";import"./chevron-down-B-Rb2m6D.js";import"./Button.module-Co5e5YHp.js";import"./check-Dx-quYQf.js";import"./useToggleState-75dnsZ5x.js";import"./Virtualizer-Fd-IOmUM.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
