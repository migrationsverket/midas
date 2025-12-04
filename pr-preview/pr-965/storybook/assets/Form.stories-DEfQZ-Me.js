import{j as e}from"./iframe-B1XQ_l8d.js";import{$ as c}from"./Form-BUqvWtF7.js";import{G as d}from"./Grid-B1fEM6fF.js";import{G as i}from"./GridItem-BDTQnNwD.js";import{T as t}from"./TextField-D39_bmyk.js";import{S as l}from"./Select-BW3j21OC.js";import{B as a}from"./Button-CRoKTtLi.js";import{R as x,a as u}from"./Radio-CfYnUBUf.js";import{C as I}from"./CheckboxGroup-CfrHsoPF.js";import{C as G}from"./Checkbox-DyNQBR-o.js";import{L as p}from"./ListBoxItem-BShOTvcG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DPtwDUAf.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D5VMdpzK.js";import"./useFocusRing-DgKSykKC.js";import"./index-BZkYwFdY.js";import"./index-DmzzjCRS.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Cx6haw_y.js";import"./TextField-BzTqPypE.js";import"./FieldError-COBE7U4N.js";import"./Text-D_Txx_2-.js";import"./Text-BFkBeHhq.js";import"./RSPContexts-DGbPHIgI.js";import"./Group-D9pKpahD.js";import"./Input-IHyObhzr.js";import"./Hidden-BU4k3NAN.js";import"./Button-6O4twiKj.js";import"./useLabels-BAmMi-sg.js";import"./useButton-BsGmSg5A.js";import"./useTextField-BQo4M90j.js";import"./useControlledState-B22hZPAG.js";import"./useField-CeLgK-LB.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DAYQDGGE.js";import"./Dialog-Da60mu5A.js";import"./OverlayArrow-B6LsV4qs.js";import"./useResizeObserver-BsXYq4Lo.js";import"./Collection-DBgBwqbG.js";import"./index-CSbxgmJq.js";import"./Separator-B061JG6P.js";import"./SelectionManager-z2imyYhP.js";import"./useEvent-DY4S-wnp.js";import"./scrollIntoView-2fhJfOJs.js";import"./SelectionIndicator-BiqBgdF5.js";import"./useDescription-C_YDLdIX.js";import"./ListKeyboardDelegate-DNKS-2eF.js";import"./PressResponder-CcZU1l8G.js";import"./useLocalizedStringFormatter-DI9f3P1n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dx3G8DHG.js";import"./VisuallyHidden-C1ErRwO4.js";import"./x-Bd3RY7iS.js";import"./createLucideIcon-DWbs9rHd.js";import"./useLocalizedStringFormatter-C-0R5Nhb.js";import"./Heading-DCd0e_XD.js";import"./info-B5SwJYbV.js";import"./Popover-eUSo6RUY.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DHvCkW4E.js";import"./DragAndDrop-VBeOUVqb.js";import"./inertValue-DaTbELSp.js";import"./useListState-Dkp7WJBp.js";import"./Tag-DDrv1jEN.js";import"./useHighlightSelectionDescription-DHiap1Ek.js";import"./useUpdateEffect-CvsLi_Vq.js";import"./useHasTabbableChild-Db8yztQH.js";import"./chevron-down-DRCwFBvR.js";import"./Button.module-Co5e5YHp.js";import"./check-DRYx_H74.js";import"./useToggleState-Dh5h9MUP.js";import"./Virtualizer-2OTavXYF.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
