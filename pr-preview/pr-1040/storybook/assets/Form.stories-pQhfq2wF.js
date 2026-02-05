import{j as e}from"./iframe-DdNBFEdS.js";import{$ as c}from"./Form-D13F7_ls.js";import{G as d}from"./Grid-1cAcP50G.js";import{G as i}from"./GridItem-D_1CJcR6.js";import{a as x,R as u}from"./Radio-Ct2bocZw.js";import{C as I}from"./CheckboxGroup-DtfmtiY0.js";import{C as G}from"./Checkbox-BMqd6eFM.js";import{T as t}from"./TextField-DofHwB6H.js";import{S as l}from"./Select-DO6ttR07.js";import{L as p}from"./ListBoxItem-JBNXFDG2.js";import{B as a}from"./Button-CStTwVWg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DKBoBmKc.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DHeKAkur.js";import"./useFocusRing-C1ql2mMD.js";import"./index-Cy32Do-K.js";import"./index-B6M-MUl5.js";import"./clsx-Ciqy0D92.js";import"./Group-C8Fn_5PI.js";import"./FieldError-Dstr91Hq.js";import"./Text-DJzhksm2.js";import"./Text-Bgy8BGDZ.js";import"./Button-BWr7_BWz.js";import"./Hidden-DdkFwnyL.js";import"./useLabels-CZmZ3erh.js";import"./useButton-CrvEZzSp.js";import"./SelectionIndicator-BflNvleB.js";import"./useField-5xN0_EGG.js";import"./VisuallyHidden-BmJ_BOK8.js";import"./useControlledState-BJIZRVo5.js";import"./Label-DSROYP0M.js";import"./Dialog-CWZxxwUo.js";import"./RSPContexts-CKuuNJn4.js";import"./OverlayArrow-BUGhProZ.js";import"./useResizeObserver-Fga4vkA0.js";import"./Collection-BHvAQsw5.js";import"./index-B0oHLev5.js";import"./Separator-C7Usgpsv.js";import"./SelectionManager-eDGBYmYv.js";import"./useEvent-CJ07A-z0.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DS4J-thO.js";import"./ListKeyboardDelegate-Cy8Ry9Ez.js";import"./PressResponder-WWYUgAPI.js";import"./useLocalizedStringFormatter-tAALMyF-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-6XctGwNP.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BfdKHuCu.js";import"./createLucideIcon-BK-2_1r2.js";import"./useLocalizedStringFormatter-ym1SGOkF.js";import"./Heading-CUaogu-M.js";import"./info-B6e12zg3.js";import"./Popover-D8unhfhQ.js";import"./check-BKlvlB_K.js";import"./useToggleState-CGDY6HqB.js";import"./TextFieldBase-6ZFc1m3u.js";import"./TextField-CTbyT6xN.js";import"./Input-D_dXMmw7.js";import"./useTextField-UnscrmQh.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-XHRRwIsr.js";import"./DragAndDrop-DmJy_z5O.js";import"./inertValue-ByymKY4Z.js";import"./useListState-C28ekYAf.js";import"./Tag-CzbtZd00.js";import"./useHighlightSelectionDescription-D9nfUQh4.js";import"./useUpdateEffect-sRaxJt7Q.js";import"./useHasTabbableChild-CJ0OT-TO.js";import"./chevron-down-CTWzBpkt.js";import"./Virtualizer-D_UwxyaH.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
