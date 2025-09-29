import{j as n}from"./iframe-BVU5JSnr.js";import{$ as j}from"./Form-DgAqABVt.js";import{G}from"./Grid-BaGFhSs4.js";import{G as e}from"./GridItem-BcyVPHoh.js";import{T as r}from"./TextField-DzuJ_MDt.js";import{S as I}from"./Select-Eg3LXG-A.js";import{B as a}from"./Button-Bo0GLZzJ.js";import{R as g,a as b}from"./Radio-mg2vPVW3.js";import{C as h}from"./CheckboxGroup-Cvecc2y9.js";import{C as k}from"./Checkbox-DlOaUiXk.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-D4cTH7aZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B5OCULdI.js";import"./useFocusRing-B2dPcgDV.js";import"./index-DueaYwDJ.js";import"./index-BBJRRiXD.js";import"./TextFieldBase-E2YUF-ez.js";import"./TextField-D-K9aetP.js";import"./FieldError-ZLNk-vks.js";import"./Text-Dq9zl_Fo.js";import"./Text-YPWDXakM.js";import"./context-BuYCPfIY.js";import"./SelectionManager-Gjea97vx.js";import"./useEvent-Ykl0dY3e.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BxybLW6k.js";import"./useDescription-BNhn9K2_.js";import"./useControlledState-CmFX_bZg.js";import"./Group-UBQyOdz7.js";import"./Input-DiGim8_F.js";import"./Hidden-BALLGs-B.js";import"./Button-B2R5PCAZ.js";import"./useLabels-DvutJKwv.js";import"./useButton-C6wPNxi1.js";import"./useTextField-BYSju2i9.js";import"./useField-eRdaEPCk.js";import"./TextField.module-DjUItNl5.js";import"./Label-BmJqoUMe.js";import"./Dialog-C1hbvTSJ.js";import"./RSPContexts-_M03WWxP.js";import"./OverlayArrow-CGxKlqHj.js";import"./useResizeObserver-CjcuvZqy.js";import"./Collection-B1h6Q1ZO.js";import"./index-BdNxvWO-.js";import"./Separator-C5b5_wBW.js";import"./PressResponder-CKKZs6gB.js";import"./useLocalizedStringFormatter-DtBBnyHA.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BlzFaFjK.js";import"./useLocalizedStringFormatter-BW-ty-Ct.js";import"./x-DejepAt0.js";import"./createLucideIcon-n0WUP9L0.js";import"./Heading-Db7Leb54.js";import"./info-Cw2mVzyP.js";import"./Popover-CjeijARM.js";import"./Tag-DMv74jpC.js";import"./ListBox-KD9a6dh6.js";import"./DragAndDrop-DAETYev3.js";import"./inertValue-BZHrgZUD.js";import"./useListState-BFMiNAd_.js";import"./useHighlightSelectionDescription-BU2KBC_2.js";import"./useUpdateEffect-Cjfigqcr.js";import"./useHasTabbableChild-C6KI6cEW.js";import"./check-CyUSm8Uh.js";import"./ListBoxSection-OH7O55pQ.js";import"./Virtualizer-B_4czZSk.js";import"./useObserveElement-CH9V1I2e.js";import"./chevron-down-jSvZPdmD.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CtDim30T.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
