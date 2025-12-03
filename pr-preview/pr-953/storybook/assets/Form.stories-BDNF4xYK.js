import{j as e}from"./iframe-BVVtlJUS.js";import{$ as c}from"./Form-CeH3jLLO.js";import{G as d}from"./Grid-D2VKp0CR.js";import{G as i}from"./GridItem-u0MAfFKT.js";import{T as t}from"./TextField-DYqLN1GX.js";import{S as l}from"./Select-SNWlkFps.js";import{B as a}from"./Button-DhG_Cd2F.js";import{R as x,a as u}from"./Radio-DbmAOj26.js";import{C as I}from"./CheckboxGroup-CZk1kbgH.js";import{C as G}from"./Checkbox-DsnXqyJp.js";import{L as p}from"./ListBoxItem-BL5o6K5V.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CgRkp8Dv.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bb3h5Nuh.js";import"./useFocusRing-2PI7p2oX.js";import"./index-B4gk8gxR.js";import"./index-DAR-rwum.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CxHi-qpa.js";import"./TextField-DW8RzS7v.js";import"./FieldError-CuKNWz7a.js";import"./Text-BizgQ59x.js";import"./Text-2vkSLQm7.js";import"./RSPContexts-B9iMytNE.js";import"./Group-o5LplglK.js";import"./Input-BGVQwFD7.js";import"./Hidden-BzUm3PMd.js";import"./Button-Z5Xlbqol.js";import"./useLabels-C9j3vCOF.js";import"./useButton-C4VZnzw0.js";import"./useTextField-Dob3aN2t.js";import"./useControlledState-7re4kOBW.js";import"./useField-BkHJutMe.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-VPQA1-wP.js";import"./Dialog-XOfh_bir.js";import"./OverlayArrow-0QpXwgcP.js";import"./useResizeObserver-CNO3EL8D.js";import"./Collection-DhgSDgxH.js";import"./index-B6aPPNol.js";import"./Separator-k198miS3.js";import"./SelectionManager-CRXYWMik.js";import"./useEvent-CTMQtBwI.js";import"./scrollIntoView-pHdkyFS1.js";import"./SelectionIndicator-ZzP435to.js";import"./useDescription-DvAMy-Is.js";import"./ListKeyboardDelegate-BFOwqObD.js";import"./PressResponder-Ng01hvOq.js";import"./useLocalizedStringFormatter-CY4FriNq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DggmcIHg.js";import"./VisuallyHidden-DXc6XDNY.js";import"./x-BSw8RQ3b.js";import"./createLucideIcon-C3maNRZb.js";import"./useLocalizedStringFormatter-DqjGsQpT.js";import"./Heading-wekCqjXp.js";import"./info-C8mE3297.js";import"./Popover-DQ-iiWrZ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B37WvyE_.js";import"./DragAndDrop-CI-0Ng3k.js";import"./inertValue-D_FNPcjc.js";import"./useListState-BQvliC0t.js";import"./Tag-omXj8z17.js";import"./useHighlightSelectionDescription-DW1AN6jY.js";import"./useUpdateEffect-CysUUqJ1.js";import"./useHasTabbableChild-C-n2wjLg.js";import"./chevron-down-C1F83Um6.js";import"./Button.module-Co5e5YHp.js";import"./check-u4DPFyl7.js";import"./useToggleState-PHzXpPJY.js";import"./Virtualizer-BQ1GGsrk.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
