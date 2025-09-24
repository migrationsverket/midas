import{j as n}from"./iframe-BzNq6PgK.js";import{$ as j}from"./Form-BsGVpCFl.js";import{G}from"./Grid-Rzj8JF46.js";import{G as e}from"./GridItem-CF3e1Fi_.js";import{T as r}from"./TextField-i3bSAqbY.js";import{S as I}from"./Select-BPQ5ToMT.js";import{B as a}from"./Button-LrpX4MZq.js";import{R as g,a as b}from"./Radio-BW85g7pp.js";import{C as h}from"./CheckboxGroup-Bmr_22Dx.js";import{C as k}from"./Checkbox-jy03YlzH.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B4uNU3lA.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BIVZaKRt.js";import"./useFocusRing-FYUE_9jy.js";import"./index-4-14HHhy.js";import"./index-D2iQKmqj.js";import"./TextFieldBase-DPvikXBV.js";import"./TextField-DymJIeeR.js";import"./FieldError-DXsDjRwF.js";import"./Text-De_6NTlF.js";import"./Text-BCfDhB8e.js";import"./ListKeyboardDelegate-BVDkuHIl.js";import"./SelectionManager-B98v13Vx.js";import"./useEvent-D9XV5a8Y.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CCaT1iSl.js";import"./useDescription-y4-vhmpm.js";import"./useControlledState-DxHOMKsm.js";import"./Group-BF8P6hsp.js";import"./Input-Bc9L3FkO.js";import"./Hidden-D12Dzj1n.js";import"./Button-1r36CvTl.js";import"./useLabels-CJiOxZLg.js";import"./useButton-DrOk25Fy.js";import"./useTextField-BhL3zIQc.js";import"./useField-ds_Q9UCX.js";import"./TextField.module-DjUItNl5.js";import"./Label-CjF_64H-.js";import"./Dialog-DT3my3XC.js";import"./RSPContexts-DBeqWbGD.js";import"./OverlayArrow-2iMBD3qx.js";import"./useResizeObserver-A3exZy9Z.js";import"./Collection-DkWzoZhs.js";import"./index-CrBqpGk7.js";import"./Separator-CM73NukE.js";import"./PressResponder-BvSJU9-E.js";import"./useLocalizedStringFormatter-xrTX6JS-.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DKTyht60.js";import"./Dialog-DAX2KZpt.js";import"./useLocalizedStringFormatter-M04wY40S.js";import"./x-C4-mWXLA.js";import"./createLucideIcon-CYwLjvLl.js";import"./Heading-xJW49ld_.js";import"./info-BMjLSICO.js";import"./Tag-Bo9jjhHY.js";import"./ListBox-BRA7naco.js";import"./DragAndDrop-B7h1cKjX.js";import"./inertValue-CHA3lUDn.js";import"./useListState-4AYnROaC.js";import"./useHighlightSelectionDescription-SB1OD7Ye.js";import"./useUpdateEffect-C1BxyjQ7.js";import"./useHasTabbableChild-CkxQLqwb.js";import"./check-c-XuE0TW.js";import"./ListBoxSection-BYvOXVV-.js";import"./Virtualizer-rwwM3Vqz.js";import"./useObserveElement-94kxVi9S.js";import"./chevron-down-BXyrEH9w.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-W5McWj4c.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
