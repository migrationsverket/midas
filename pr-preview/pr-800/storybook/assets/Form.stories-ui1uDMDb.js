import{j as n}from"./iframe-D6_Gbrx5.js";import{$ as j}from"./Form-naRad1CB.js";import{G}from"./Grid-Drv1pazU.js";import{G as e}from"./GridItem-DbYirSEz.js";import{T as r}from"./TextField-D02eFuc7.js";import{S as I}from"./Select-DO_QxmWk.js";import{B as a}from"./Button-CZg-SCOr.js";import{R as g,a as b}from"./Radio-Bh68M3rX.js";import{C as h}from"./CheckboxGroup-DAMVhOMx.js";import{C as k}from"./Checkbox-X7tOVsti.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-C8CzlONL.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DwcUsawd.js";import"./useFocusRing-DVATcvnw.js";import"./index-ZDT7Sr_g.js";import"./index-Fq4Ou1x2.js";import"./TextFieldBase-Db1eIx9G.js";import"./TextField-DfanV7Uc.js";import"./FieldError-BS4fSdG1.js";import"./Text-ogRMf88F.js";import"./Text-BzqdwAxe.js";import"./ListKeyboardDelegate-ARInoun3.js";import"./SelectionManager-D7T64D-o.js";import"./useEvent-Bvt22bIc.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CPs__pQ-.js";import"./useDescription-CqZwta02.js";import"./useControlledState-DWtWyNye.js";import"./Group-BoPDxDOc.js";import"./Input-DOCGQ7th.js";import"./Hidden-52VfUVAH.js";import"./Button-Dx3PaW5V.js";import"./useLabels-BdEZlG40.js";import"./useButton-BThRQuv3.js";import"./useTextField-CLExMd7c.js";import"./useField-BekmEGYY.js";import"./TextField.module-DjUItNl5.js";import"./Label-BQdsap25.js";import"./Dialog-ctyj3geT.js";import"./RSPContexts-C_itCD3U.js";import"./OverlayArrow-DPsZXmdk.js";import"./useResizeObserver-C2eseIc_.js";import"./Collection-CBwA5LYL.js";import"./index-CZGdd1df.js";import"./Separator-CCxmmYi-.js";import"./PressResponder-B95tkmrS.js";import"./useLocalizedStringFormatter-CC2h6y7o.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DIu8jdnA.js";import"./Dialog-C6e4FNFy.js";import"./useLocalizedStringFormatter-DU5H2ADp.js";import"./x-CjLmNamp.js";import"./createLucideIcon-D1YlQFWm.js";import"./Heading-NyVw2LLW.js";import"./info-BZ2fnq6e.js";import"./Tag-CZ22_zfW.js";import"./ListBox-2wkpwmQM.js";import"./DragAndDrop-NaDpCuFV.js";import"./inertValue-BwUSt5Yv.js";import"./useListState-CmHfWj5B.js";import"./useHighlightSelectionDescription-BBY2zFk2.js";import"./useUpdateEffect-BAfVYKpI.js";import"./useHasTabbableChild-BJdLPc5a.js";import"./check-CZ1CtxkP.js";import"./ListBoxSection-BoS2P6_e.js";import"./Virtualizer-C3qdGQPb.js";import"./useObserveElement-4KH-nU2b.js";import"./chevron-down-A-H5_RW8.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CniTeSQl.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
