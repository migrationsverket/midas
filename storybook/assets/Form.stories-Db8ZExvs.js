import{j as e}from"./iframe-DQ8MWDzl.js";import{$ as c}from"./Form-CbJ9UDZ3.js";import{G as d}from"./Grid-DofQ96xI.js";import{G as i}from"./GridItem-Bdhc0VeB.js";import{a as x,R as u}from"./Radio-ClQyWOQ5.js";import{C as I}from"./CheckboxGroup-_VUkMmXl.js";import{C as G}from"./Checkbox-BTkCb0MC.js";import{T as t}from"./TextField-eczF2ivg.js";import{S as l}from"./Select-Dpolc9Uf.js";import{L as p}from"./ListBoxItem-CfrNYZMo.js";import{B as a}from"./Button-lMIcCMmO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-MUondYLm.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DoUO8THk.js";import"./useFocusRing-OnsEPzNC.js";import"./index-CWjVL5dm.js";import"./index-pN5S6Ptu.js";import"./clsx-Ciqy0D92.js";import"./Group-mb2-Cd9n.js";import"./FieldError-BbsiMUDV.js";import"./Text-B7FL6X4L.js";import"./Text-DZRYbZpm.js";import"./Button-C6oyl_qC.js";import"./Hidden-BFm8JVh5.js";import"./useLabels-v8Ev80De.js";import"./useButton-DHWmFvz2.js";import"./SelectionIndicator-I5GQXWq9.js";import"./useField--phBsH06.js";import"./VisuallyHidden-CYOdgqsq.js";import"./useControlledState-DLe-crj8.js";import"./Label-Buj55ddc.js";import"./Dialog-Cmu4GjVU.js";import"./RSPContexts-DuvxmCvc.js";import"./OverlayArrow-Cidfy_ws.js";import"./useResizeObserver-CUs-YIhO.js";import"./Collection-CHWjj3pz.js";import"./index-BiiJUMlY.js";import"./Separator-lkR-B1Y9.js";import"./SelectionManager--WVYRdwt.js";import"./useEvent-LiCRS7cz.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DlClEnzw.js";import"./ListKeyboardDelegate-JeH3KL6j.js";import"./PressResponder-CnBBkPfP.js";import"./useLocalizedStringFormatter-CfUu-qj4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-JNJHjPum.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-B_gkLLTD.js";import"./createLucideIcon-BgRpLVeX.js";import"./useLocalizedStringFormatter-DopWcpGf.js";import"./Heading-BWnhyVKJ.js";import"./info-B1V3XFmD.js";import"./Popover-CdqC2Mtl.js";import"./check-CeaqFALW.js";import"./useToggleState-DVPLAu_I.js";import"./TextFieldBase-Db_TiAjD.js";import"./TextField-nC0ierlg.js";import"./Input-pooT7Y8K.js";import"./useTextField-B054hSp-.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BkZeiiRH.js";import"./DragAndDrop-CdbQpsBP.js";import"./inertValue-BpBmo_ir.js";import"./useListState-D3JTv8Y9.js";import"./Tag-BuVl3ZFC.js";import"./useHighlightSelectionDescription-Bz2_eHeW.js";import"./useUpdateEffect-CPnIGhVH.js";import"./useHasTabbableChild-DZkCqXg5.js";import"./chevron-down-2gnqmAH_.js";import"./Virtualizer-DTFXV2O-.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
