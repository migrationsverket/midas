import{j as e}from"./iframe-CmPG4FoB.js";import{$ as c}from"./Form-DYt1yWSH.js";import{G as d}from"./Grid-CihFHfES.js";import{G as i}from"./GridItem-BCfLOXL4.js";import{a as x,R as u}from"./Radio-B6vG13zD.js";import{C as I}from"./CheckboxGroup-BTfUsltP.js";import{C as G}from"./Checkbox-BmTyE7T9.js";import{T as t}from"./TextField-Dq77JS8k.js";import{S as l}from"./Select-BYMv2sA5.js";import{L as p}from"./ListBoxItem-jgMh6wcq.js";import{B as a}from"./Button-ryGeYMAs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BAAQ8UkA.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D90F9Ft3.js";import"./useFocusRing-Cb7-V4u2.js";import"./index-B72qOhyX.js";import"./index-CWU1EcPI.js";import"./clsx-Ciqy0D92.js";import"./Group-BjpIyx0S.js";import"./FieldError-BBtlti2J.js";import"./Text-Cy2IEGkF.js";import"./Text-C8u6JSGZ.js";import"./Button-BopS93OI.js";import"./Hidden-BRolh-uL.js";import"./useLabels-8sZBmGn_.js";import"./useButton-MazVA7qC.js";import"./SelectionIndicator-E1JMO_0P.js";import"./useField-0rPxrk8p.js";import"./VisuallyHidden-Du1fTxZa.js";import"./useControlledState-DykEM3ap.js";import"./Label-BOgwkVoy.js";import"./Dialog-CLg91Wd0.js";import"./RSPContexts-Cjk68_Rq.js";import"./OverlayArrow-Dp0oCapN.js";import"./useResizeObserver-BswNohqj.js";import"./Collection-BwbdgeJH.js";import"./index-BYkDUZ2-.js";import"./Separator-BoeSI7NJ.js";import"./SelectionManager-BkzOSiiK.js";import"./useEvent-C4oXjZGM.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DsFIZovu.js";import"./ListKeyboardDelegate-ByK-z0nv.js";import"./PressResponder-B9Q0vUTr.js";import"./useLocalizedStringFormatter-BgmHW-Xx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-1HxKRMlm.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-FrzhBZNc.js";import"./createLucideIcon-BxIqJcJw.js";import"./useLocalizedStringFormatter-C9Gk6SCX.js";import"./Heading-DS5Rtu4V.js";import"./info-EyaroSL0.js";import"./Popover-_TSpe8cf.js";import"./check-tdaJa0jL.js";import"./useToggleState-C1LwacOp.js";import"./TextFieldBase-Dz9ZHp4q.js";import"./TextField-F0Yzbyi_.js";import"./Input-BOAD0_1o.js";import"./useTextField-DSNR_uxW.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bvw11hzJ.js";import"./DragAndDrop-wgbvUJfy.js";import"./inertValue-CYTV2hfJ.js";import"./useListState-hnVA7aWS.js";import"./Tag-Dnlb5jtv.js";import"./useHighlightSelectionDescription-CzGfjmyT.js";import"./useUpdateEffect-DAgcakrq.js";import"./useHasTabbableChild-7CHAkmBX.js";import"./chevron-down-ByLr6Soe.js";import"./Virtualizer-DSiXJxd7.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
