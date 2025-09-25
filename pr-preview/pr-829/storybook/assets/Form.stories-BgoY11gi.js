import{j as n}from"./iframe-CoT2joOm.js";import{$ as j}from"./Form-D4DSZGJO.js";import{G}from"./Grid-58zseVMW.js";import{G as e}from"./GridItem-DKt1kyQ4.js";import{T as r}from"./TextField-DU6c3W3B.js";import{S as I}from"./Select-CbUrPnUZ.js";import{B as a}from"./Button-m6Ok0Vdw.js";import{R as g,a as b}from"./Radio-BJ00UluC.js";import{C as h}from"./CheckboxGroup-Cx0_CUDF.js";import{C as k}from"./Checkbox-CHQQ_pAq.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DTm5v2pk.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-JDaCjONQ.js";import"./useFocusRing-CG3Gigr3.js";import"./index-DMPTW7uV.js";import"./index-DJkDJSTk.js";import"./TextFieldBase-DPy738qK.js";import"./TextField-CO3CYlzg.js";import"./FieldError-CbdgFEMC.js";import"./Text-BAej5hJ1.js";import"./Text-Cc3B1-bk.js";import"./ListKeyboardDelegate-pLT42UAq.js";import"./SelectionManager-B9qHXara.js";import"./useEvent-DsKDxWtQ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DBWI5jpF.js";import"./useDescription-DK98PmbK.js";import"./useControlledState-NYSQlhCg.js";import"./Group-DEWPHy5p.js";import"./Input-BluVf9gy.js";import"./Hidden-B_1YwYaL.js";import"./Button-GDh9gL0p.js";import"./useLabels-D3ZJDUj6.js";import"./useButton-BGu-Oz_E.js";import"./useTextField-CpepA1iw.js";import"./useField-DivOlXDr.js";import"./TextField.module-DjUItNl5.js";import"./Label-kFiQSffR.js";import"./Dialog-C3MYmY5I.js";import"./RSPContexts-GAfuhUZW.js";import"./OverlayArrow-C5OXoxaG.js";import"./useResizeObserver-RS5FI2vl.js";import"./Collection-42BPyQ13.js";import"./index-DJyLlumo.js";import"./Separator-DzK2mUqR.js";import"./PressResponder-DTH3F9ap.js";import"./useLocalizedStringFormatter-gUzWleFI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BJxnEETB.js";import"./Dialog-DLvNhDws.js";import"./useLocalizedStringFormatter-ByHDoeAD.js";import"./x-CT3ZxzBu.js";import"./createLucideIcon-7-rtweXn.js";import"./Heading-lk3n0ziy.js";import"./info-C81F3kpm.js";import"./Tag-C8ttnVec.js";import"./ListBox-BJt4iTd0.js";import"./DragAndDrop-AF0onfYk.js";import"./inertValue-CTbBzk6q.js";import"./useListState-CP1l_ats.js";import"./useHighlightSelectionDescription-Xy3QNTyT.js";import"./useUpdateEffect-BitD5dwf.js";import"./useHasTabbableChild-DdASszH8.js";import"./check-D8jYuUf7.js";import"./ListBoxSection-CDOP4um6.js";import"./Virtualizer-CktixkMZ.js";import"./useObserveElement-CRiy9ep1.js";import"./chevron-down-Ia_OsEPO.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CA6lcGcg.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
