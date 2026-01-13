import{j as e}from"./iframe-CZTdAuLL.js";import{$ as c}from"./Form-Bl1MSaTZ.js";import{G as d}from"./Grid-BrwTgC21.js";import{G as i}from"./GridItem-Bq4vWmbQ.js";import{T as t}from"./TextField-TkcNA6Dz.js";import{S as l}from"./Select-C7ix4iJs.js";import{B as a}from"./Button--pbAGE4c.js";import{R as x,a as u}from"./Radio-lRfYd0uJ.js";import{C as I}from"./CheckboxGroup-DYtNBEFt.js";import{C as G}from"./Checkbox-DFacIMvN.js";import{L as p}from"./ListBoxItem-BYIoxTmh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-GGwn7RiQ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-JbXxfkzx.js";import"./useFocusRing-BSU_jsuo.js";import"./index-CbuYzQrS.js";import"./index-Dy_KSJtF.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CPUkoaVW.js";import"./TextField-DvR0dOlR.js";import"./FieldError-BY6a5paY.js";import"./Text-Dvj4eqEd.js";import"./Text-DZZVuCM0.js";import"./RSPContexts-oB4wdkDb.js";import"./Group-DSbr1dZp.js";import"./Input-DHbn4_zf.js";import"./Hidden-BdpD47Oa.js";import"./Button-DKjLxueu.js";import"./useLabels-BNcETZqg.js";import"./useButton-DXw3P5Be.js";import"./useTextField-B9Jzafy-.js";import"./useControlledState-CG6WOxF-.js";import"./useField-NQyyqEGl.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-C1JQhNMS.js";import"./Dialog-D5GJeGKf.js";import"./OverlayArrow-BbZuFQb3.js";import"./useResizeObserver-BC8TBZMD.js";import"./Collection-CBIq2LLr.js";import"./index-sdVB9DoJ.js";import"./Separator-Cg_qLKvh.js";import"./SelectionManager-DFcqLyoF.js";import"./useEvent-BFknnVL3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-L5J_akna.js";import"./useDescription-DpLhcWK7.js";import"./ListKeyboardDelegate-CPIvui1d.js";import"./PressResponder-8Wrce3iX.js";import"./useLocalizedStringFormatter-CcV7KYjT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3S_ZR8pv.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-O6FFlbhO.js";import"./x-CEAUK25F.js";import"./createLucideIcon-BlxvcGuc.js";import"./useLocalizedStringFormatter-D-uEk36w.js";import"./Heading-DZGMY1f3.js";import"./info-Dlx9Supt.js";import"./Popover-NCjz8AHy.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DdCfQtcC.js";import"./DragAndDrop-D72ucaZW.js";import"./inertValue-BQEjeX4z.js";import"./useListState-BW0IdfES.js";import"./Tag-C54I00xX.js";import"./useHighlightSelectionDescription-BD4U5VXv.js";import"./useUpdateEffect-tYpZRE2L.js";import"./useHasTabbableChild-BxdTwMAr.js";import"./chevron-down-BEtNsj94.js";import"./Button.module-Co5e5YHp.js";import"./check-CY09Yzzr.js";import"./useToggleState-5IwhMBtr.js";import"./Virtualizer-OuIZ8kH-.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
