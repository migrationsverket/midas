import{j as e}from"./iframe-rItT_jfY.js";import{$ as c}from"./Form-xZZMOzJK.js";import{G as d}from"./Grid-CIhzRF9s.js";import{G as i}from"./GridItem-BeQy_6W0.js";import{T as t}from"./TextField-ClxOevtj.js";import{S as l}from"./Select-BrKKXLeJ.js";import{B as a}from"./Button-DrR1Xrnd.js";import{R as x,a as u}from"./Radio-BsCPrCQ5.js";import{C as I}from"./CheckboxGroup-5tavuIYg.js";import{C as G}from"./Checkbox-BG2S3tlH.js";import{L as p}from"./ListBoxItem-BHsMNvz0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CPF4-yP8.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C8P0UNS6.js";import"./useFocusRing-DGFc7HbQ.js";import"./index-BnPbWBMv.js";import"./index-D8DgLnGQ.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DM5RiOt0.js";import"./TextField-DFOzO-ha.js";import"./FieldError-Cvsb7is6.js";import"./Text-DDMiWQFi.js";import"./Text-FNlrqDfC.js";import"./RSPContexts-DzXYmQki.js";import"./Group-B7xOX0uR.js";import"./Input-DLD4_IPw.js";import"./Hidden-n1HYXibJ.js";import"./Button-B5QUqElW.js";import"./useLabels-BtpKNtTB.js";import"./useButton-BqLzl4IJ.js";import"./useTextField-BepY0cYc.js";import"./useControlledState-Bzf4gGGh.js";import"./useField-7Rs9hAAC.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CVA51VOr.js";import"./Dialog-BZhjlrsa.js";import"./OverlayArrow-CHMM6Trm.js";import"./useResizeObserver-DHx_VHvt.js";import"./Collection-QxkacQyP.js";import"./index-lTN4k8mO.js";import"./Separator-DP_B8qjA.js";import"./SelectionManager-ClX1YJNW.js";import"./useEvent-Dh1rWvm4.js";import"./scrollIntoView-f5b4LpVi.js";import"./SelectionIndicator-DzyDNqXF.js";import"./useDescription-CcHx15SB.js";import"./ListKeyboardDelegate-DIxIliT5.js";import"./PressResponder-Q0fo8lIs.js";import"./useLocalizedStringFormatter-CTRxJDJV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BSPxFyqb.js";import"./VisuallyHidden-BJd1ReHn.js";import"./x-CzCgO8Qu.js";import"./createLucideIcon-B9nFww81.js";import"./useLocalizedStringFormatter-MQKdyit4.js";import"./Heading-B-doG5oq.js";import"./info-C9mgKuUL.js";import"./Popover-BungVBqP.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Snqx65Zn.js";import"./DragAndDrop-DEibgcFj.js";import"./inertValue-Cjdea07k.js";import"./useListState-J_Yg5WrX.js";import"./Tag-Bukq8Re3.js";import"./useHighlightSelectionDescription-BNpqk8Xn.js";import"./useUpdateEffect-t7qqhOel.js";import"./useHasTabbableChild-D82imXI2.js";import"./chevron-down-4nzr1P08.js";import"./Button.module-Co5e5YHp.js";import"./check-CdyXM58L.js";import"./useToggleState-BtTZk53P.js";import"./Virtualizer-EysZCcNG.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
