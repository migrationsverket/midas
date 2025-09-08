import{j as n}from"./iframe-CADNkzDL.js";import{$ as j}from"./Form-BXdYWSo7.js";import{G}from"./Grid-Cw7r4EkB.js";import{G as e}from"./GridItem-CTeha9j-.js";import{T as r}from"./TextField-CZx239Kh.js";import{S as I}from"./Select-BSjt88q6.js";import{B as a}from"./Button-B06MeP3H.js";import{R as g,a as b}from"./Radio-Ck19NCA0.js";import{C as h}from"./CheckboxGroup-CqiquXdP.js";import{C as k}from"./Checkbox-CQaqpQgl.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BRQGvenZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C-coBRm1.js";import"./useFocusRing-B0w8zuTu.js";import"./index-CZU2Wv30.js";import"./index-BB0FSD4e.js";import"./TextFieldBase-CVEqZijR.js";import"./TextField-DcUEBJKU.js";import"./FieldError-7o40FY4N.js";import"./Text-DsjhGdl_.js";import"./Text-Cj5-clmJ.js";import"./ListKeyboardDelegate-DEEWUJZ9.js";import"./SelectionManager-Bjqx3R_s.js";import"./useEvent-CL7TYj0q.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DRsYSSLF.js";import"./useDescription-DHfS0dmD.js";import"./useControlledState-6NNWky-C.js";import"./Group-B5x4pkdc.js";import"./Input-Cq4nzWEm.js";import"./Hidden-kXRviXiR.js";import"./Button-Bkx5_CX5.js";import"./useLabels-DFiehMC2.js";import"./useButton-DSo34csk.js";import"./useTextField-DAfVexJj.js";import"./useField-B9xH3dj3.js";import"./TextField.module-8oYDuXgF.js";import"./Label-BGd6Rybp.js";import"./Dialog-DV1bAsL8.js";import"./RSPContexts-BRLI2WFw.js";import"./OverlayArrow-Bcui1N-m.js";import"./useResizeObserver-_uYzaggt.js";import"./Collection-D3dSPW-o.js";import"./index-Bvqlg8EC.js";import"./Separator-Dvfrth78.js";import"./PressResponder-DDwU9ZnG.js";import"./useLocalizedStringFormatter-DtS8zFu9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B_59GK2l.js";import"./Dialog-CdqGvBXh.js";import"./useLocalizedStringFormatter-enJlC8Ja.js";import"./x-70RmMTyE.js";import"./createLucideIcon-BN2OwsXr.js";import"./Heading-nl5W70Oy.js";import"./info-MreKKfAz.js";import"./Tag-Bcida6di.js";import"./ListBox-W8JkzKpG.js";import"./DragAndDrop-gZxDhVaw.js";import"./inertValue-DuuMTosU.js";import"./useListState-BaKBf6s1.js";import"./useHighlightSelectionDescription-SAXIenBo.js";import"./useUpdateEffect-Bs0AG0bs.js";import"./useHasTabbableChild-B7Ey0_7p.js";import"./check-DjhfphPA.js";import"./ListBoxSection-DE_9xqlM.js";import"./Virtualizer-jQ4qxjEX.js";import"./useObserveElement-CSvDo_AD.js";import"./chevron-down-CMJunoJG.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-CZoc7a9b.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
