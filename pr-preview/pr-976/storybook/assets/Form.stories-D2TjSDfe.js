import{j as e}from"./iframe-BHqTUq8s.js";import{$ as c}from"./Form-CD3uZi_W.js";import{G as d}from"./Grid-D8hyPPwU.js";import{G as i}from"./GridItem-BS7eCflK.js";import{T as t}from"./TextField-pI0u-hZL.js";import{S as l}from"./Select-sGkf34QN.js";import{B as a}from"./Button-B5hBY_tv.js";import{R as x,a as u}from"./Radio-yQ636X6R.js";import{C as I}from"./CheckboxGroup-BDAO23Ks.js";import{C as G}from"./Checkbox-BuCB18wy.js";import{L as p}from"./ListBoxItem-B8nZfQ9k.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bj3EyYaW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-bHmqxDjI.js";import"./useFocusRing-BmhCrYVv.js";import"./index-Sstif_cL.js";import"./index-cPauk73w.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BXI2ioFe.js";import"./TextField-D4RVqe0O.js";import"./FieldError-DRRjbRt6.js";import"./Text-l0B9lw7d.js";import"./Text-BNa5DR9o.js";import"./RSPContexts-Ttp8fkt6.js";import"./Group-XBiHOVaK.js";import"./Input-UpHXPKd1.js";import"./Hidden-N1ucyMbU.js";import"./Button-CE94D4y2.js";import"./useLabels-D7M8cQNq.js";import"./useButton-DYUODf-M.js";import"./useTextField-B8TIChcC.js";import"./useControlledState-VO85oOjD.js";import"./useField-DcudRm_h.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BNjGv8mt.js";import"./Dialog-Br4zbXxI.js";import"./OverlayArrow-C_OamBiX.js";import"./useResizeObserver-cm4qtY3A.js";import"./Collection-r37viCRb.js";import"./index-DL_Rgot6.js";import"./Separator-Bk2MUFJ7.js";import"./SelectionManager-Btz1onrS.js";import"./useEvent-C1jiU2Qc.js";import"./scrollIntoView-D02Gxwgm.js";import"./SelectionIndicator-BmKRoRFc.js";import"./useDescription-SMoFRkYN.js";import"./ListKeyboardDelegate-BPp9wv8J.js";import"./PressResponder-CLCZD3PG.js";import"./useLocalizedStringFormatter-Bp2mibmh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-uOpIaMSZ.js";import"./VisuallyHidden-BluHmF1Q.js";import"./x-D1nhCFMc.js";import"./createLucideIcon-ClnAiwMi.js";import"./useLocalizedStringFormatter-Djq8wsFX.js";import"./Heading-Bk9UwyhT.js";import"./info-AlYopkhl.js";import"./Popover-B_aiaKcW.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-j3nbhoDS.js";import"./DragAndDrop-BPVcnNd6.js";import"./inertValue-CExeWkQ6.js";import"./useListState-DaMnwO8d.js";import"./Tag-K2kNfuz4.js";import"./useHighlightSelectionDescription-Cn_6uGdi.js";import"./useUpdateEffect-bU03uSJ6.js";import"./useHasTabbableChild-DAQp9pX4.js";import"./chevron-down-CJf09NWQ.js";import"./Button.module-D9QkU2r7.js";import"./check-2WOXg9Sl.js";import"./useToggleState-Cc0kOyEk.js";import"./Virtualizer-5i74JC5-.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
