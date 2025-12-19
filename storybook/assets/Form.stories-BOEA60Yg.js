import{j as e}from"./iframe-CAhUTzpa.js";import{$ as c}from"./Form-BT-tAfh7.js";import{G as d}from"./Grid-CX9_55i-.js";import{G as i}from"./GridItem-DlncwiNm.js";import{T as t}from"./TextField-Boh9B80B.js";import{S as l}from"./Select-CQ-mAaVq.js";import{B as a}from"./Button-CEwmyXrj.js";import{R as x,a as u}from"./Radio-4H4FoLLo.js";import{C as I}from"./CheckboxGroup-CoTBolEB.js";import{C as G}from"./Checkbox-gkyYjuM8.js";import{L as p}from"./ListBoxItem-D-DSHzAp.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BBEb1i5a.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BaOTM6Qe.js";import"./useFocusRing-DXkBxwcs.js";import"./index-laAtK-vd.js";import"./index-C0V27OqG.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DAXcPrxr.js";import"./TextField-C3BzTobi.js";import"./FieldError-BNkxmj-u.js";import"./Text-DytUCpzS.js";import"./Text-Dc50-ZiZ.js";import"./RSPContexts-C0EMNRL0.js";import"./Group-uynE1wPp.js";import"./Input-CSM6KDUU.js";import"./Hidden-BSm-jApx.js";import"./Button-Bw4aoosc.js";import"./useLabels-LVaI7Ckp.js";import"./useButton-30T4O4rB.js";import"./useTextField-DdEC4wKZ.js";import"./useControlledState-BCuX3ll3.js";import"./useField-CcZ_CJQd.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-6AsbOmxL.js";import"./Dialog-CJYw2RFr.js";import"./OverlayArrow-DKTnq9TC.js";import"./useResizeObserver-Bs_xAFtz.js";import"./Collection-B9Z6ePs_.js";import"./index-BYTdbooY.js";import"./Separator-1EiuOh5S.js";import"./SelectionManager-CMYerw5D.js";import"./useEvent-CBu_soYi.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ds1w6LMQ.js";import"./useDescription-CeOYRicD.js";import"./ListKeyboardDelegate-UMeU1xj9.js";import"./PressResponder-Cox4OqQa.js";import"./useLocalizedStringFormatter-Dooq5aoS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5kfj1-j.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DXeRsBp-.js";import"./x-BoMw_Obi.js";import"./createLucideIcon-d4-YdXSh.js";import"./useLocalizedStringFormatter-Cg4zfByW.js";import"./Heading-DQZUCzZD.js";import"./info-DQVMF0cE.js";import"./Popover-CsDif3Uo.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B1V783-q.js";import"./DragAndDrop-wxCK-6TR.js";import"./inertValue-Bl4nzWzz.js";import"./useListState-BCtvsHJP.js";import"./Tag-Ab5yOpZS.js";import"./useHighlightSelectionDescription-BMlJE0e8.js";import"./useUpdateEffect-BjuLS3Zh.js";import"./useHasTabbableChild-CVOyivVL.js";import"./chevron-down-Dd1aH-JE.js";import"./Button.module-Co5e5YHp.js";import"./check-YUJi6w0y.js";import"./useToggleState-CcFye2aw.js";import"./Virtualizer-zPJii3Vi.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
